use std::collections::{HashMap, HashSet};
use std::sync::Arc;
use futures_util::SinkExt;
use tokio::sync::{Mutex};
use lazy_static::lazy_static;
use serde::Serialize;
use tokio::select;
use crate::globals::{Broadcast, Register, Unregister, ROOMS};
use crate::models::{Client, Message, Room};


pub async fn run_hub() {
    let mut register = Register::rx_instance().await;
    let mut unregister = Unregister::rx_instance().await;
    let mut broadcast = Broadcast::rx_instance().await;

    loop {
        select! {
            Some(client) = register.recv() => {
                tokio::spawn(register_client(client));
            },
            Some(client) = unregister.recv() => {
                tokio::spawn(unregister_client(client));
            },
            Some(message) = broadcast.recv() => {
                tokio::spawn(broadcast_message(message));
            },
        }
    }
}

lazy_static! {
    static ref ROOMSMUMAP: Mutex<HashMap<String, Mutex<()>>> = {
        Mutex::new(HashMap::new())
     };
}

async fn register_client(client: Arc<Client>) {
    let mut mutex_map = ROOMSMUMAP.lock().await;
    let room_mutex = mutex_map.entry(client.room_number.clone()).or_insert(Mutex::new(()));
    let _guard = room_mutex.lock().await;

    let mut rooms_hm = ROOMS.lock().await;
    let room = rooms_hm.entry(client.room_number.clone())
        .or_insert_with(|| {
            let mut clients = HashSet::new();
            clients.insert(client.clone());
            Room {
                number: client.room_number.clone(),
                count: 0,
                clients,
            }
        });

    drop(_guard);
    drop(mutex_map);

    room.clients.insert(client.clone());
    room.count += 1;
    drop(rooms_hm);

    Broadcast::tx().send(
        Message {
            client: client.clone(),
            message: format!("{} has joined the room", client.name),
            is_announcement: true,
            msg_type: "join".into(),
        }
    ).await.unwrap();
    println!("connection registered:   {} in room {}", client.name, client.room_number);
}

async fn unregister_client(client: Arc<Client>) {
    let mut rooms_hm = ROOMS.lock().await;
    let room = rooms_hm.get_mut(&client.room_number).unwrap();

    if room.count == 1 {
        rooms_hm.remove(&client.room_number);
        let mut mutex_map = ROOMSMUMAP.lock().await;
        mutex_map.remove(&client.room_number);
    } else {
        room.clients.remove(&client);
        room.count -= 1;

        Broadcast::tx().send(
            Message {
                client: client.clone(),
                message: format!("{} has left the room", client.name),
                is_announcement: true,
                msg_type: "leave".into(),
            }
        ).await.unwrap();
    }
    println!("Connection unregistered: {} in room {}", client.name, client.room_number);
}

async fn broadcast_message(message: Message) {
    #[derive(Serialize)]
    struct Payload {
        #[serde(rename = "type")]
        msg_type: String,
        data: HashMap<&'static str, String>,
    }

    async fn create_message_worker(client: Arc<Client>, message: Arc<Message>) {
        let payload = if message.is_announcement {
            Payload {
                msg_type: "announcement".to_owned(),
                data: HashMap::from([
                    ("message", message.message.clone()),
                    ("name", message.client.name.clone()),
                    ("type", message.msg_type.to_string())
                ]),
            }
        } else {
            Payload {
                msg_type: "message".to_owned(),
                data: HashMap::from([
                    ("name", message.client.name.clone()),
                    ("message", message.message.clone()),
                ]),
            }
        };
        // stringify json payload and send with ws
        let payload = serde_json::to_string(&payload).unwrap();
        let mut tx = client.connection.lock().await;
        if let Err(_) = tx.send(axum::extract::ws::Message::Text(payload)).await {
            tx.send(axum::extract::ws::Message::Close(None)).await.unwrap();
            Unregister::tx().send(client.clone()).await.unwrap();
        }
    }

    let message = Arc::new(message);
    for client in ROOMS.lock().await.get(&message.client.room_number).unwrap().clients.iter() {
        if client != &message.client || message.is_announcement {
            tokio::spawn(create_message_worker(client.clone(), message.clone()));
        }
    }
}









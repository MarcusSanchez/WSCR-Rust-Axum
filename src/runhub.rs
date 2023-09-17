use std::collections::{HashMap, HashSet};
use std::sync::Arc;
use axum::extract::ws::Message::Close;
use futures_util::SinkExt;
use tokio::sync::{Mutex};
use lazy_static::lazy_static;
use serde::Serialize;
use serde_json::json;
use tokio::select;
use crate::globals::{Broadcast, Register, Unregister, ROOMS};
use crate::models::{Client, BroadcastMessage, Room, BroadcastType, MessageType};
use crate::models::BroadcastType::{Announcement, Message};


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
        Announcement(
            BroadcastMessage {
                client: client.clone(),
                message: format!("{} has joined the room", client.name),
                msg_type: MessageType::Join,
            }
        )
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
            Announcement(
                BroadcastMessage {
                    client: client.clone(),
                    message: format!("{} has left the room", client.name),
                    msg_type: MessageType::Leave,
                }
            )
        ).await.unwrap();
    }
    println!("Connection unregistered: {} in room {}", client.name, client.room_number);
}

async fn broadcast_message(message: BroadcastType) {
    #[derive(Serialize)]
    struct Payload {
        #[serde(rename = "type")]
        msg_type: String,
        data: HashMap<&'static str, String>,
    }

    async fn create_message_worker(client: Arc<Client>, message: Arc<BroadcastType>) {
        let message = message.as_ref();
        let payload = match message {
            Announcement(announcement) => json!({
                "type": "announcement",
                "data": {
                    "message": announcement.message,
                    "name": announcement.client.name,
                    "type": announcement.msg_type.to_string(),
                }
            }),
            Message(message) => json!({
                "type": "message",
                "data": {
                    "name": message.client.name,
                    "message": message.message,
                }
            })
        };

        let mut tx = client.connection.lock().await;
        if let Err(_) = tx.send(axum::extract::ws::Message::Text(payload.to_string())).await {
            tx.send(Close(None)).await.unwrap();
            Unregister::tx().send(client.clone()).await.unwrap();
        }
    }

    let (sender, broadcast_type) = match &message {
        Announcement(announcement) => (announcement.client.clone(), "announcement"),
        Message(message) => (message.client.clone(), "message"),
    };
    let message = Arc::new(message);
    for receiver in ROOMS.lock().await.get(&sender.room_number).unwrap().clients.iter() {
        if receiver != &sender || broadcast_type == "announcement" {
            tokio::spawn(create_message_worker(receiver.clone(), message.clone()));
        }
    }
}









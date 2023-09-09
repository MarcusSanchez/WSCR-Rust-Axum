use std::sync::{Arc};
use axum::extract::Path;
use axum::extract::ws::WebSocket;
use axum::Json;
use serde::Serialize;
use futures_util::{sink::SinkExt, stream::{StreamExt}};

use crate::globals::{Broadcast, Register, ROOMS, Unregister};
use crate::models::{Client, Message};

pub async fn ws_handler(socket: WebSocket, name: String, room: String) {
    let (tx, mut rx) = socket.split();

    let client = Arc::new(Client::new(name, room, tx));
    Register::tx().send(client.clone()).await.unwrap();

    while let Some(Ok(msg)) = rx.next().await {
        let msg = msg.into_text().unwrap();
        if msg == "" { continue; } // this is the close socket signal, don't broadcast to others
        Broadcast::tx().send(Message {
            client: client.clone(),
            message: msg,
            is_announcement: false,
            msg_type: "".into(),
        }).await.unwrap();
    }

    Unregister::tx().send(client.clone()).await.unwrap();
    client.connection.lock().await.close().await.unwrap();
}

pub async fn generate_empty_room() -> String {
    let rooms_map = ROOMS.lock().await;
    let mut room_number;
    loop {
        // random number 1 - 9999
        room_number = (rand::random::<u16>() % 9999 + 1).to_string();
        // "12" -> "0012"
        while room_number.len() < 4 {
            room_number = "0".to_owned() + &room_number;
        }
        if !rooms_map.contains_key(&room_number) {
            break;
        }
    }
    room_number
}

#[derive(Serialize)]
pub struct RoomInfo {
    error: &'static str,

    #[serde(rename = "errorMessage")]
    #[serde(skip_serializing_if = "Option::is_none")]
    error_message: Option<&'static str>,

    #[serde(rename = "roomCount")]
    room_count: u16,

    participants: Vec<String>,
}

pub async fn get_room_info(Path(room_number): Path<String>) -> Json<RoomInfo> {
    if let Some(room) = ROOMS.lock().await.get(&room_number) {
        let mut participants = vec![];
        for client in room.clients.iter() {
            participants.push(client.name.clone());
        }
        return Json(RoomInfo {
            error: "false",
            error_message: None,
            room_count: room.count as u16,
            participants,
        });
    }

    return Json(RoomInfo {
        error: "true",
        error_message: Some("Room does not exist"),
        room_count: 0,
        participants: vec![],
    });
}
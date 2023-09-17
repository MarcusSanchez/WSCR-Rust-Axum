mod client;

use std::collections::HashSet;
use std::sync::Arc;
use axum::extract::ws::WebSocket;
use futures_util::stream::SplitSink;
use tokio::sync::Mutex;
use axum::extract::ws::Message as WsMessage;

pub struct Client {
    pub name: String,
    pub room_number: String,
    pub connection: Mutex<SplitSink<WebSocket, WsMessage>>,
    pub unique_id: String, // for hasher
}

pub struct BroadcastMessage {
    pub client: Arc<Client>,
    pub message: String,
    pub msg_type: MessageType,
}

pub struct Room {
    pub number: String,
    pub count: usize,
    pub clients: HashSet<Arc<Client>>,
}

pub enum BroadcastType {
    Announcement(BroadcastMessage),
    Message(BroadcastMessage),
}

#[derive(Clone)]
pub enum MessageType {
    Join,
    Leave,
    Message,
}

impl MessageType {
    pub fn to_string(&self) -> String {
        match self {
            MessageType::Join => "join".to_owned(),
            MessageType::Leave => "leave".to_owned(),
            MessageType::Message => "message".to_owned(),
        }
    }
}


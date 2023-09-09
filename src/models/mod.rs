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

pub struct Message {
    pub client: Arc<Client>,
    pub message: String,
    pub is_announcement: bool,
    pub msg_type: String,
}

pub struct Room {
    pub number: String,
    pub count: usize,
    pub clients: HashSet<Arc<Client>>,
}
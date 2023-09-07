use crate::models::{Client};
use std::hash::{Hash, Hasher};
use tokio::sync::Mutex;
use axum::extract::ws::{Message, WebSocket};
use futures_util::stream::SplitSink;
use uuid::Uuid;

impl Client {
    pub fn new(name: String, room_number: String, connection: SplitSink<WebSocket, Message>) -> Client {
        return Client {
            name,
            room_number,
            connection: Mutex::new(connection),
            unique_id: Uuid::new_v4().to_string(),
        };
    }
}

impl Hash for Client {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.unique_id.hash(state);
    }
}

impl Eq for Client {}

impl PartialEq for Client {
    fn eq(&self, other: &Self) -> bool {
        self.unique_id == other.unique_id &&
            self.name == other.name &&
            self.room_number == other.room_number
    }
}
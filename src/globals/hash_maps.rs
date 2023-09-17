use std::collections::HashMap;
use lazy_static::lazy_static;
use crate::models::Room;
use tokio::sync::{Mutex, MutexGuard};

lazy_static! {
    pub static ref ROOMS: Mutex<HashMap<String, Room>> = {
        Mutex::new(HashMap::new())
    };
}


use lazy_static::lazy_static;
use tokio::sync::mpsc::{channel, Receiver, Sender};
use std::sync::{Arc};
use crate::models::{Client, BroadcastType};

use tokio::sync::{Mutex};

type ClientSender = Sender<Arc<Client>>;
type ClientReceiver = Receiver<Arc<Client>>;

lazy_static! {
    static ref REGISTER: (Arc<ClientSender>, Mutex<Option<ClientReceiver>>) = {
        let (tx, rx) = channel(100);
        (Arc::new(tx), Mutex::new(Some(rx)))
    };
}

pub struct Register;

impl Register {
    pub fn tx() -> Arc<ClientSender> {
        REGISTER.0.clone()
    }

    pub async fn rx_instance() -> ClientReceiver {
        REGISTER.1.lock().await.take().unwrap()
    }
}


lazy_static! {
    static ref UNREGISTER: (Arc<ClientSender>, Mutex<Option<ClientReceiver>>) = {
        let (tx, rx) = channel(100);
        (Arc::new(tx), Mutex::new(Some(rx)))
    };
}

pub struct Unregister;

impl Unregister {
    pub fn tx() -> Arc<ClientSender> {
        UNREGISTER.0.clone()
    }

    pub async fn rx_instance() -> ClientReceiver {
        UNREGISTER.1.lock().await.take().unwrap()
    }
}


lazy_static! {
    static ref BROADCAST: (Arc<Sender<BroadcastType>>, Mutex<Option<Receiver<BroadcastType>>>) = {
        let (tx, rx) = channel(100);
        (Arc::new(tx), Mutex::new(Some(rx)))
    };
}

pub struct Broadcast;

impl Broadcast {
    pub fn tx() -> Arc<Sender<BroadcastType>> {
        BROADCAST.0.clone()
    }

    pub async fn rx_instance() -> Receiver<BroadcastType> {
        BROADCAST.1.lock().await.take().unwrap()
    }
}
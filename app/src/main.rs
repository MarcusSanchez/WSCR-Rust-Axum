mod runhub;
mod globals;
mod models;
mod routes;

use axum::{Router};
use runhub::run_hub;
use std::env;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};

#[tokio::main]
async fn main() {
    let port = match env::var("PORT") {
        Ok(val) => val,
        Err(_) => "3000".to_string(),
    };
    let port = port.parse::<u16>().expect("Invalid Port Parsed");
    let addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 0)), port);

    let mut app = Router::new();
    app = routes::start_routing(app);
    tokio::spawn(run_hub());

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}


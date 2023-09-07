mod runhub;
mod globals;
mod models;
mod routes;

use axum::{Router};
use runhub::run_hub;
use std::env;

#[tokio::main]
async fn main() {
    let port = match env::var("PORT") {
        Ok(val) => val,
        Err(_) => "3000".to_string(),
    };
    let addr = format!("0.0.0.0:{}", port);

    let mut app = Router::new();
    app = routes::start_routing(app);
    tokio::spawn(run_hub());

    println!("Server running on: http://localhost:3000");
    axum::Server::bind(&addr.parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}


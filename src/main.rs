mod runhub;
mod globals;
mod models;
mod routes;

use axum::{Router};
use runhub::run_hub;

#[tokio::main]
async fn main() {
    let mut app = Router::new();
    app = routes::start_routing(app);
    tokio::spawn(run_hub());

    println!("Server running on: http://localhost:3000");
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}


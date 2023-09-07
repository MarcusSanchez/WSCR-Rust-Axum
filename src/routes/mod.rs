mod handlers;

use axum::{
    Router,
    routing::get,
};
use axum::extract::{Path, WebSocketUpgrade};
use tower_http::services::ServeDir;

pub fn start_routing(app: Router) -> Router {
    app
        .route("/generateRoom", get(handlers::generate_empty_room))
        .route("/info/:room", get(handlers::get_room_info))
        .route("/ws/:name/:room", get(|ws: WebSocketUpgrade, Path((name, room)): Path<(String, String)>| async {
            ws.on_upgrade(move |socket| handlers::ws_handler(socket, name, room))
        }))

        .nest_service("/", ServeDir::new("../public"))
}


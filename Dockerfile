FROM rust:1.72-alpine AS build

WORKDIR /app

COPY . .

RUN apk add --no-cache musl-dev openssl-dev
RUN cargo build --release

COPY ./public ./public

RUN cargo install --path .
RUN cargo build --release

ENV PORT=3000
EXPOSE 3000

CMD ["./target/release/wscr"]
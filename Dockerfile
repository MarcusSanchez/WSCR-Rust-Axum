FROM rust:1.72-alpine AS build

WORKDIR /app

RUN apk add --no-cache musl-dev openssl-dev

COPY . .

RUN cargo build --release

FROM alpine:3.14

WORKDIR /app

COPY --from=build /app/target/release/wscr ./wscr

COPY ./public ./public

ENV PORT=3000
EXPOSE 3000

CMD ["./wscr"]
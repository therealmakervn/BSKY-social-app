-- Up Migration
CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR PRIMARY KEY,
    did VARCHAR NOT NULL UNIQUE,
    handle VARCHAR NOT NULL,
    display_name VARCHAR,
    avatar_url VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id VARCHAR PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    text TEXT NOT NULL,
    reply_parent VARCHAR,
    reply_root VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS posts_user_id_idx ON posts(user_id);
CREATE INDEX IF NOT EXISTS posts_reply_parent_idx ON posts(reply_parent);

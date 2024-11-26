FROM node:20-bullseye AS node-builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies with specific resolutions
RUN yarn set version stable && \
    yarn config set nodeLinker node-modules && \
    yarn install --frozen-lockfile --network-timeout 300000

# Copy rest of the source
COPY . .

# Build web assets
RUN yarn build-web

FROM golang:1.22-bullseye AS go-builder

WORKDIR /app
COPY . .
COPY --from=node-builder /app/bskyweb/static ./bskyweb/static

# Build Go binary
RUN cd bskyweb/ && \
    go mod download && \
    go mod verify && \
    CGO_ENABLED=1 \
    GOOS=linux \
    GOARCH=amd64 \
    go build -v -trimpath -tags timetzdata -o /bskyweb ./cmd/bskyweb

FROM caddy:2.7-alpine

WORKDIR /srv
COPY --from=go-builder /bskyweb /usr/bin/bskyweb
COPY --from=node-builder /app/bskyweb/static ./static

# Add Caddyfile
RUN printf "{\n\
    admin off\n\
    persist_config off\n\
    auto_https off\n\
    log {\n\
        format json\n\
    }\n\
    servers {\n\
        trusted_proxies static private_ranges 100.0.0.0/8\n\
    }\n\
}\n\
\n\
:{$PORT:3000} {\n\
    log {\n\
        format json\n\
    }\n\
    root * /srv/static\n\
    encode gzip\n\
    file_server\n\
    try_files {path} /index.html\n\
}" > /etc/caddy/Caddyfile

ENV PORT=3000
EXPOSE 3000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=20
ENV NVM_DIR=/usr/share/nvm

# Cài đặt Node và yarn
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    npm install -g yarn

# Copy source và build
COPY . .
RUN source $NVM_DIR/nvm.sh && \
    yarn && \
    yarn build-web

# Build Go binary
RUN cd bskyweb/ && \
    go mod download && \
    go mod verify && \
    CGO_ENABLED=1 \
    GOOS=linux \
    GOARCH=amd64 \
    go build -v -trimpath -tags timetzdata -o /bskyweb ./cmd/bskyweb

FROM caddy:2.7-alpine

WORKDIR /usr/bin
COPY --from=build-env /bskyweb ./bskyweb
COPY --from=build-env /usr/src/social-app/bskyweb/static ./static
COPY Caddyfile /etc/caddy/Caddyfile

ENV PORT=3000
EXPOSE 3000

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

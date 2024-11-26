FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=20
ENV NVM_DIR=/usr/share/nvm

# Cài đặt Node và yarn
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Copy source code
COPY . .

# Build web assets using bash
SHELL ["/bin/bash", "-c"]
RUN . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    npm install -g yarn && \
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

FROM debian:bullseye-slim

ENV PORT=3000
ENV GODEBUG=netdns=go

RUN apt-get update && apt-get install --yes \
    dumb-init \
    ca-certificates

WORKDIR /usr/bin
COPY --from=build-env /bskyweb ./bskyweb
COPY --from=build-env /usr/src/social-app/bskyweb/static ./static

ENTRYPOINT ["dumb-init", "--"]
CMD ["./bskyweb", "serve"]

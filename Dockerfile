FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=20
ENV NVM_DIR=/usr/share/nvm

# Cài đặt các dependencies cần thiết
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    git \
    && rm -rf /var/lib/apt/lists/*

# Cài đặt Node và yarn
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    npm install -g yarn

# Copy source code
COPY . .

# Build web assets
SHELL ["/bin/bash", "-c"]
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

# Second stage
FROM debian:bullseye-slim

ENV PORT=3000
ENV GODEBUG=netdns=go

RUN apt-get update && apt-get install --yes \
    dumb-init \
    ca-certificates

WORKDIR /bskyweb
COPY --from=build-env /bskyweb /usr/bin/bskyweb

ENTRYPOINT ["dumb-init", "--"]
CMD ["/usr/bin/bskyweb", "serve", "--host", "0.0.0.0", "--port", "$PORT"]

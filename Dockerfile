FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=20
ENV NVM_DIR=/usr/share/nvm

# Copy package files để cache
COPY package.json yarn.lock ./
COPY bskyweb/go.mod bskyweb/go.sum ./bskyweb/

# Cài đặt dependencies 
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    npm install -g yarn && \
    yarn install --frozen-lockfile && \
    cd bskyweb/ && go mod download

# Copy source và build
COPY . .
RUN yarn build-web && \
    cd bskyweb/ && \
    CGO_ENABLED=1 GOOS=linux go build -o /bskyweb ./cmd/bskyweb

FROM debian:bullseye-slim

ENV PORT=3000
ENV GODEBUG=netdns=go

RUN apt-get update && apt-get install --yes \
    dumb-init \
    ca-certificates

WORKDIR /usr/bin
COPY --from=build-env /bskyweb ./bskyweb
COPY --from=build-env /usr/src/social-app/bskyweb/static ./static
COPY bskyweb/migrations /usr/bin/migrations

ENTRYPOINT ["dumb-init", "--"]
CMD ["./bskyweb", "serve"]
RUN ./bskyweb migrate

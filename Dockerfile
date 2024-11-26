FROM golang:1.22-bullseye AS build-env
WORKDIR /usr/src/social-app

# Cài Node và yarn trước
ENV NODE_VERSION=20
ENV NVM_DIR=/usr/share/nvm

# Copy package files để cache
COPY package.json yarn.lock ./
COPY bskyweb/go.* ./bskyweb/

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
    go get github.com/bluesky-social/social-app/bskyweb/database && \
    CGO_ENABLED=1 GOOS=linux go build -o /bskyweb ./cmd/bskyweb

FROM debian:bullseye-slim
WORKDIR /usr/bin
ENV PORT=3000

RUN apt-get update && \
    apt-get install -y dumb-init ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY --from=build-env /bskyweb ./bskyweb
COPY --from=build-env /usr/src/social-app/bskyweb/static ./static

EXPOSE $PORT
ENTRYPOINT ["dumb-init", "--"]
CMD ["./bskyweb", "serve"]
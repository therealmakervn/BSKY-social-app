FROM node:20-bullseye AS node-builder

WORKDIR /usr/src/social-app
COPY . .

# Build web assets
RUN yarn && \
    yarn build-web

FROM golang:1.22-bullseye AS go-builder

WORKDIR /usr/src/social-app
COPY . .
COPY --from=node-builder /usr/src/social-app/bskyweb/static ./bskyweb/static

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
COPY --from=go-builder /bskyweb ./bskyweb
COPY --from=node-builder /usr/src/social-app/bskyweb/static ./static

ENTRYPOINT ["dumb-init", "--"]
CMD ["./bskyweb", "serve"]

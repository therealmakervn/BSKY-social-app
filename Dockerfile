FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV GOEXPERIMENT="loopvar"

# Copy bskyweb directory first
COPY bskyweb/ ./bskyweb/

# Download and verify dependencies (không init vì đã có go.mod)
RUN cd bskyweb/ && \
    go mod download && \
    go mod verify

# Build the binary
RUN cd bskyweb/ && \
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

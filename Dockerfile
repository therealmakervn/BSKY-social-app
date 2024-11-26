FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV GOEXPERIMENT="loopvar"

# Copy bskyweb directory first
COPY bskyweb/ ./bskyweb/

# Initialize Go modules
RUN cd bskyweb/ && \
    go mod init bskyweb && \
    go mod tidy

# Build the binary
RUN cd bskyweb/ && \
    CGO_ENABLED=1 \
    GOOS=linux \
    GOARCH=amd64 \
    go build -v -trimpath -tags timetzdata -o /bskyweb ./cmd/bskyweb

# Second stage
FROM debian:bullseye-slim

ENV GODEBUG=netdns=go
ENV TZ=Etc/UTC
ENV DEBIAN_FRONTEND=noninteractive
ENV PORT=3000

RUN apt-get update && apt-get install --yes \
    dumb-init \
    ca-certificates

WORKDIR /bskyweb
COPY --from=build-env /bskyweb /usr/bin/bskyweb

ENTRYPOINT ["dumb-init", "--"]
CMD ["/usr/bin/bskyweb", "serve", "--host", "0.0.0.0", "--port", "$PORT"]

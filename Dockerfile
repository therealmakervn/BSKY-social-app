FROM golang:1.22-bullseye AS build-env

WORKDIR /usr/src/social-app

ENV DEBIAN_FRONTEND=noninteractive
ENV GOEXPERIMENT="loopvar"

# Copy only go files first
COPY bskyweb/ ./bskyweb/
COPY go.mod go.sum ./

# Initialize Go modules
RUN cd bskyweb/ && \
    go mod download && \
    go mod tidy && \
    go mod verify

# Build the binary
RUN cd bskyweb/ && \
    CGO_ENABLED=1 \
    GOOS=linux \
    GOARCH=amd64 \
    go build -v -trimpath -tags timetzdata -o /bskyweb ./cmd/bskyweb

# ... rest of your Dockerfile

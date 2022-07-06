FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

# chmod +x .docker/entrypoint.sh
# docker-compose up
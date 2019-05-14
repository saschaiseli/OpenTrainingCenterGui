FROM node:8.11.2-alpine as node
ARG env_name
ENV ENV_RUN_PARAM=$env_name

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache git

RUN npm install

COPY . .

RUN npm run build:$ENV_RUN_PARAM


# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/OpenTrainingCenter /usr/share/nginx/html
COPY ./src/docker/nginx.conf /etc/nginx/conf.d/default.conf

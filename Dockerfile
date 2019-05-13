FROM node:8.11.2-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache git

RUN npm install

COPY . .

RUN npm run build


# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/OpenTrainingCenter /usr/share/nginx/html
COPY ./src/docker/nginx.conf /etc/nginx/conf.d/default.conf

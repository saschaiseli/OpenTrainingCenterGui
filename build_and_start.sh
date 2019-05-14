#!/usr/bin/env bash

echo "Start OpenTrainingCenter for $1"

ENVIRONMENT=$1
TAG=$2
if [ $ENVIRONMENT = "prod" ]
then
  echo "Build Production GUI"
  port=88
else
  echo "Build Development GUI"
  ENVIRONMENT=dev
  port=78
  TAG=latest
fi

container_name=opentrainingcenter-gui-$ENVIRONMENT

docker rm $container_name -f

docker build --build-arg env_name=${ENVIRONMENT} -t opentrainingcenter:$TAG .

echo "Starting the container ....."
docker run -d --rm -p $port:80 --name $container_name opentrainingcenter:$TAG
echo "Container is started ...."

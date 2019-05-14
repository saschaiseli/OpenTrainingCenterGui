#!/usr/bin/env bash

echo "Start OpenTrainingCenter for $1"

tag=$2
if [ $1 == 'PROD' ]
then
echo "Production"
container_name=opentrainingcenter-gui-prod
port=88
else
echo "Development"
container_name=opentrainingcenter-gui-dev
port=78
fi

docker rm $container_name -f

docker build -t opentrainingcenter:$2 .

echo "Starting the container ....."
docker run -d --rm -p $port:80 --name $container_name opentrainingcenter:$2
echo "Container is started ...."

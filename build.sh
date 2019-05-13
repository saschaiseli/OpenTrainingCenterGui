#!/usr/bin/env bash

docker build -t opentrainingcenter .

docker run -p 80:80 --rm opentrainingcenter

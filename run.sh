#!/bin/sh
docker build . -t idangibly/storemaven_game && docker run -p 4000:4000  -d idangibly/storemaven_game && cd ./client && npm install && npm start
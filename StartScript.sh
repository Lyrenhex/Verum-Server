#!/bin/bash

# update the Node
git fetch --all
git reset --hard origin/master
npm update

# start the Node
npm start


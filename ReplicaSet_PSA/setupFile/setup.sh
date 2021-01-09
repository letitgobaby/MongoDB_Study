#!/bin/bash

sleep 10 | echo Sleeping

mongo mongodb://mongo_a:27017 replicaSet.js

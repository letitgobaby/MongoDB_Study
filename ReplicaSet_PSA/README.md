# Simple MongoDB ReplicaSet Test With Docker-Mongo:4.2 

<br />

![PSA](https://user-images.githubusercontent.com/48303144/104096228-9327ab80-52de-11eb-852b-8927793492f3.jpeg)

<br />

### Prerequisites
- You must have docker and docker-compose installed on your local computer.

<br />

### How to work
- docker-compose up -d

<br />

### Check your test results

- Check mongo_a ( primary node )
```
docker exec -it mongo_a /bin/bash

# in mongo_a Container
mongo 

# create database
use test

# create collection and insert document
db.testcollection.insert({ name: letitgobaby, job: developer });

db.testcollection.find({});
```

<br />

- Check mongo_b ( secondary node )
```
docker exec -it mongo_b /bin/bash

# in mongo_a Container
mongo

# allow secondary node to have READ auth
rs.secondaryOk(); 

use test;

db.testcollection.find({});
```

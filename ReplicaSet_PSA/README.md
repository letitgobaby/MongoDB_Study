# MongoDB Replica Set With Docker-Mongo:4.2 

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

use test

db.testcollection.insert({ name: letitgobaby, job: developer });

db.testcollection.find({});
```

<br />

- Check mongo_b ( secondary node )
```
docker exec -it mongo_b /bin/bash

# in mongo_a Container
mongo

rs.secondaryOk(); # allow secondary node to have READ auth

use test;

db.testcollection.find({});
```

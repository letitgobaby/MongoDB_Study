# MongoDB Replica Set With Docker-Mongo:4.2 

use test

db.testcollection.insert({ name: letitgobaby, job: developer });

db.testcollection.find({});



rs.secondaryOk();

use test;

db.testcollection.find({});
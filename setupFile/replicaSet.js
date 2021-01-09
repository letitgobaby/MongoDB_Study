config = {
  _id : "replSetTest",
  members: [
    { _id:0, host : "mongo_a:27017", priority:2 },
    { _id:1, host : "mongo_b:27017", priority:1 },
    { _id:2, host : "mongo_c:27017", priority:1, arbiterOnly: true },
  ]
}

rs.initiate(config);

rs.conf();

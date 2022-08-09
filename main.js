const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'test';
const client = new MongoClient(url, { useUnifiedTopology: true});
client.connect(function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log("success");
})
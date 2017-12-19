//to connect to mongodb we require mongo client from npm init mongobd@2.2.5
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//two arguments
//1st string... url
//callback function... if connection successful or failed
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb Server');


  db.collection('Todos').find().count().then((count)=>{
      console.log(`Todos count: ${count}`);
      console.log(JSON.stringify(count,undefined,2));
  }, (err) => {
    console.log("error:",err);
  });








  // db.collection('Todos').find({
  //   _id: new ObjectID('5a2e0dfa6dd2d77f21a84f01')
  // }).toArray().then((docs)=>{
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log("error:",err);
  // }); //find is ptr to the document
  //to array writtens promise. hence we can add then call

  //db.close();

});

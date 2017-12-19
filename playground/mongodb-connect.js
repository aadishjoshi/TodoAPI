//to connect to mongodb we require mongo client from npm init mongobd@2.2.5
const MongoClient = require('mongodb').MongoClient;

//two arguments
//1st string... url
//callback function... if connection successful or failed
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  //
  // });

  db.collection('Users').insertOne({
    name: 'Aadish',
    age: 21,
    location: 'Dallas'
  }, (err,result)=>{
    if(err){
       return console.log('Unable to insert todo',err);
     }
     console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();

});

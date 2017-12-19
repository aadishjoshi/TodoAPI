const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDb Server');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eating lunch'}).then((result) =>{
  //   console.log('result: ',result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eating lunch'}).then((result) =>{
  //   console.log('result: ',result);
  // });


    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
      console.log('result: ',result);
    });


  //db.close();

});

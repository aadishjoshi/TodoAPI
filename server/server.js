var mongoose = require('mongoose');

//to use global promise library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

//to create model for everything we gonna store
// var Todo = mongoose.model('Todo',{
//   text: {
//     type: String
//   },
//   completed:{
//     type: Boolean
//   },
//   completedAt:{
//     type: Number
//   }
// });

// var Todo = mongoose.model('Todo',{
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   },
//   completedAt:{
//     type: Number,
//     default: null
//   }
// });


//to create object of this model
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

//to save this object to database

// newTodo.save().then((docs)=>{
//   console.log('saved todo:',docs);
// },(e)=>{
//   console.log('Unable to connect');
// });

// var otherTodo = new Todo({
//   text: ' Edit this video   '
// });
//
// otherTodo.save().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined, 2));
// },(e)=>{
//   console.log('Unable to connect',e);
// });

var User = mongoose.model('User',{
  email: {
    type: String,
    require: true,
    trim:true,
    minlength:1
  }
});

var user = new User({
  text: 'aadish@1234.com'
});

user.save().then((doc)=>{
  console.log('saved',doc);
}, (e)=>{
  console.log('error',e);
});

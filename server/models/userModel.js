var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  email:  { 
    type: String,
    unique: true,
    required:true 
  },
  password: {
    type : String,
    required: [true, 'password is required'],
    minlength: [6, 'password min 6 character'],
  }
});

var User=mongoose.model('User',userSchema);

module.exports=User;
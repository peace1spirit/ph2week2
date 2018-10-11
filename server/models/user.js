var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const  generatePassword  = require('../helpers')

var userSchema = new Schema({
  name: {
    type : String,
    required : [true, 'name is required']
  },
  email:  {
    type : String,
    unique : [true, 'email already exists'],
    required : [true, 'email is required']
  },
  password: {
    type : String,
    required: [true, 'password is required'],
    minlength: [6, 'password min 6 character'],
  },
});
// let r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// let result = r.test($(this).val())
userSchema.post('save', function(user) {

  generatePassword(this.email, this.password)
  .then(function(newPassword){
      User.update(
          { _id : user._id},
          { password : newPassword}
      )
      .then(function(){})
      .catch(function(){})
  })
  
})

var User = mongoose.model('User', userSchema);

module.exports = User
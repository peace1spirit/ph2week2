var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: {
    type: String,
    required:true
  },
  location:  { 
    type: String,
    required:true 
  },
  address: {type: String},
  user : { type: Schema.Types.ObjectId, ref: 'User' }

});

var Event=mongoose.model('Event',eventSchema);

module.exports=Event;
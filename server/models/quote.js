var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  status: {
    type : String,
    required : [true, 'quote is required']
  },
  like : [{userid: { type: Schema.Types.ObjectId, ref: 'User' }}],
  user : { type: Schema.Types.ObjectId, ref: 'User' }
});

var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote
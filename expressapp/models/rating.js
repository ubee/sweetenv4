var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userid:{type:String, require:true},
    rating:{type:Number, require:true},
});

module.exports = mongoose.model('Rating',schema);
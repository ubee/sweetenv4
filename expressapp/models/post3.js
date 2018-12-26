var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    type:{type:String, require:true},
    condition:{type:String, require:true},
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    number:{type:String, require:true},
    available:{type:String, require:true},
    date:{type:String, require:true},
    userid:{type:String,require:true}
});

module.exports = mongoose.model('Post3',schema);
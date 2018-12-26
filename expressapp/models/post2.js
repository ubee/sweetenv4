var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    reno:{type:String, require:true},
    reason:{type:String, require:true},
    scope:{type:String, require:true},
    squarefoot:{type:String, require:true},
    premium:{type:String, require:true},
    style:{type:String, require:true},
    service:{type:String, require:true},
    budget1:{type:String, require:true},
    budget2:{type:String, require:true},
    help:{type:String, require:true},
    question:{type:String, require:true},
    url:{type:String, require:true},
    userid:{type:String, require:true},

  


});

module.exports = mongoose.model('Post2',schema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    streetAddress:{type:String, require:true},
    Apt:{type:String, require:true},
    renovation: {type:String, require:true},
    zip:{type:String, require:true},
    Skills: [{
        relation: {
            type: String,
            required: true
        }

    }],
    userid:{type:String, require:true}

  


});

module.exports = mongoose.model('Post1',schema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    streetAddress:{type:String, require:true},
    City:{type:String, require:true},
    State:{type:String, require:true},
    renovation: {type:String, require:true},
    zip:{type:String, require:true},
    Skills: [{
        relation: {
            type: String,
            required: true
        }

    }],
    status:{type:String, require:true},
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
    type:{type:String, require:true},
    condition:{type:String, require:false},
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    number:{type:String, require:true},
    available:{type:String, require:false},
    date:{type:String, require:true},
    project_status:{type:String, require:false},
    userid:{type:String, require:true}

  


});

module.exports = mongoose.model('HomeRenovation',schema);
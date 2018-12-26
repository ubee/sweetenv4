var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    streetAddress:{type:String, require:true},
    City:{type:String, require:true},      
    State:{type:String, require:true},
    zip:{type:String, require:true},
    leaseduration:{type:String, require:true},
    url:{type:String, require:false},
    scope:{type:String, require:true},
    squarefoot:{type:String, require:true},
    style:{type:String, require:true},
    budget1:{type:String, require:true},
    budget2:{type:String, require:true},
    req:{type:String, require:true},
    question:{type:String, require:true},
    firstname:{type:String, require:true},
    lastname:{type:String, require:true},
    number:{type:String, require:true},
    startdate:{type:String, require:true},
    deadline:{type:String, require:true},
    info:{type:String, require:true},
    projectname:{type:String, require:true},
    renovationOptions:{type:String, require:true},
    userid:{type:String, require:true}
  


});

module.exports = mongoose.model('Business',schema);
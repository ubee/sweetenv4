var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    projectid:{type:String, require:true},
    contractor_id:{type:String, require:true},
});

module.exports = mongoose.model('AssignedProject',schema);
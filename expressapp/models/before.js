var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    originalname:{type:String, require:true}, 
    uploadname:{type:String, require:true}
});

module.exports = mongoose.model('Before',schema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    taskList: [{
        done: {
            type:Boolean,
            required: true
        },
        task: {
            type: String,
            default: true
        }

    }],  
    projectid:{type:String, require:true},
 

});

module.exports = mongoose.model('Todolist',schema);
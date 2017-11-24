'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Por favor, digite o nome da tarefa.'
    },
    Created_date: {
        type: Date,
        dafault: Date.now
    },
    status:{
        type: [{
            type: String,
            enum: ['pendente', 'fazendo', 'completa']
        }],
        default: ['pendente']
    }
});
module.exports =  mongoose.model('Tasks', TaskSchema);
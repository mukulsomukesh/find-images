const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true,
        
    }
})

const Note = mongoose.model("AllNotes",noteSchema);
module.exports = {Note}
const {Note} = require('../models/noteModel');
// const asyncHandler = require('express-async-handler');

const getNotes = async (req,res) => {
    const {user_id} = req.body;
    const all_notes = await Note.find({user_id:user_id})
    res.send({notes:all_notes});
    // res.send("all notes data")
}
const createNote = async (req,res) => {
    const {taskname,status,tag,user_id} = req.body;

    if(!taskname || !status || !tag) {
        res.status(400);
        throw new Error("Please Fill all the fields")
    } else {
        const note = new Note({user_id , taskname,status,tag});
        await note.save();
        res.send("Updated")
    }
}

const updateNote = async (req,res) => {
    const {taskname,status,tag,user_id} = req.body;

    const note = await Note.findById(req.params.id);
    // if(note.user.toString() !== req.user._id.toString()) {
    //     res.status(401);
    //     throw new Error("You cant perform this action")
    // }
    if(note) {
        note.taskname = taskname;
        note.status = status;
        note.tag = tag;

        const updateNote = await note.save();
        res.json(updateNote)
    } else {
        res.status(404);
        throw new Error("Note not found")
    }
}

const DeleteNote = async(req,res) => {
    const note = await Note.findById(req.params.id);

    if(note){
        await note.remove();
        res.send("Note Removed")
    } else {
        res.status(404);
        throw new Error("Note not found")
    }
}

module.exports = {getNotes,createNote,updateNote,DeleteNote}
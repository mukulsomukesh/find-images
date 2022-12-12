const express = require('express');
const { getNotes, createNote, updateNote, DeleteNote } = require("../controller/noteController");



const router = express.Router();

router.route('/todos').get(getNotes);
router.route('/todos/create').post(createNote);
router.route('/todos/:id').put(updateNote).delete(DeleteNote)


module.exports = router
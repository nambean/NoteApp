const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    phoneNumber:Number,
    status:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
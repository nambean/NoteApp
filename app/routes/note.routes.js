module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/followCreated', notes.create);

    // Retrieve all Notes
    app.get('/follow', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/follow/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/follow/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/follow/:noteId', notes.delete);
}
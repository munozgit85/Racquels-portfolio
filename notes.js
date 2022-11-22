
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {notes} = require("../../db/db.json");
//const express = require('express');
//const app = express();
//const { handleNoteDelete, getAndRenderNotes} = require("../public/assets/js/index");
//const {db} = require("../db/db.json");



//API routes to the notes.html 
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//route to read the `db.json` file and return all saved notes as JSON.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//route to index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Retrieves a note with specific id
router.get("/notes/:id", function(req,res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
});

router.get("api/notes", function(req, res) {
    // Read the db.json file and return all saved notes as JSON.
    let results = notes;
    res.json(results);
});

// post a new note to db.json, then write to the hml 
router.post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
})

//delete note based on  id.
router.delete("/api/notes/:id", (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
});

function updateDb(id, notesArray) {
    const deletedNote = id;
    for (let i = 0; i < notesArray.length; i++) {
      if (deletedNote === notesArray[i].id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }

  function createNewNote(body, notesArray) {
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({notes: notesArray}, null, 2)
    );
    return newNote;
  };




module.exports = router;

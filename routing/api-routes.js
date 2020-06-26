// Add Dependencies
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const store = require("./../db/store.js");

// API Routes
router.get("/notes", (req, res) => {
    store.getNotes().then((notes)=>{
    res.json(notes);
    })
});

router.post("/notes", (req, res) => {
    console.log("Post Notes")
    store.addNotes(req.body).then((notes)=>{
    res.json(notes);
    })
    .catch((err)=> res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
    console.log(req.params.id);
    store.deleteNote(req.params.id).then(()=> res.json({ok:true}));
});

module.exports = router;
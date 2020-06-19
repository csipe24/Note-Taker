// Add Dependencies
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const store = require("./../db/store.js");


// API Routes
router.get("/notes", (req, res) => {
    console.log("Read Notes");
    store.getNotes().then((notes)=>{
        res.json(notes);
    })

});

router.post("/notes", (req, res) => {
    console.log("Post Notes")
    store.addNote(req.body).then((notes)=>{
    res.json(notes);
    });
    res.end();
});

router.delete("notes:id", (req, res) => {
    console.log("Deleted Notes");

});


module.exports = router;
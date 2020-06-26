const fs = require("fs");
const path = require("path");
const util = require("util");
const {v1: uuidv1}= require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

 read(){
      return readFileAsync(path.join(__dirname, "../db/db.json"), "utf8");
      } 

 write( content ){
      return writeFileAsync(path.join(__dirname, "../db/db.json"), content);
      }

 getNotes(){
      return this.read().then((data)=>{
      return data ? JSON.parse(data) : [];
      });
      }

     
 saveNotes( notes ){
      return this.write(JSON.stringify(notes)); 
      }

 addNotes( note ){
      return this.getNotes().then((notes)=>{
      const newNote = {...note, id: uuidv1()};
      notes.push(newNote);
      console.log("All Notes");
      console.log(notes);
      return this.saveNotes( notes ).then(() => newNote);
      });
      }
  
 deleteNote(noteId){
      return this.getNotes().then((notes)=> {
      const newList = notes.filter((note)=> note.id !== noteId);
      this.saveNotes(newList);
      })
      }
};

module.exports = new Store;
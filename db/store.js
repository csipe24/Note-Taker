const fs = require("fs");
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

class Store {

 read(){
 return readFileAsync(path.join(__dirname, "../db/db.json"), "utf8");
      } 

 getNotes(){
     return this.read().then((data)=>{
         return data ? JSON.parse(data) : [];
     });
    }

 addNote(){
    return this.getNotes().then((notes)=>{
      console.log(notes);
    })
   
   //  fs.writeFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
   //   res.json(JSON.parse(data));
   //  })
    
   }

   deleteNote(){


   }
  

};




module.exports = new Store;
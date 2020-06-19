# Note-Taker Application

## Description
Welcome to the express.js note taker application! This node CLI app can be used to write, save and delete your notes.
As a coder it has been very hectic to write notes and keep them organized! This application will allow you to save notes to a server and access them at any time!

# Installation

Heroku 

Our Note Taker Application operates in the terminal using NODE.js. which means it does not require a browser to create this file for you! To begin usage install the JSON package using "NPM Install". 

# Usage
Use this application for a quick and easy way to write notes, organize notes and access them quickly!

# Preview
![picture](Assets/terminal.jpg)

Built With
Microsoft Visual Studio Code

# Authors/Contributors
Christopher Sipe - UW Coding Bootcamp Student


  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.




* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository
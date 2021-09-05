const express = require("express");
const app = express('path');
const fs = require("fs");
const path = require("path");
const util = require("util");

// var http = require("http");
// express app
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// API Routes

let savedNotesGlobal = util.promisify(fs.readFile)
function getSavedNotes() {
    console.log("Saved Notes", savedNotesGlobal("./db/db.json", "utf8"))
    return savedNotes = savedNotesGlobal("./db/db.json", "utf8")
};

app.get("/api/notes", (req, res) => {
    getSavedNotes()
    .then((savedNotes) => {
        res.send(JSON.parse(savedNotes))
    })
    .catch((err) => res.status(500).json(err));
});

// Get/notes - needs to return notes.html
app.get("/notes", (request, response) => {

    response.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("Your Notes!");
})

// Get * - needs to return index.html (?)
app.get("/", (request, response) => {
    // response.sendFile(path.join(__dirname, "..", "..", "index.html"));
    response.sendFile(path.join(__dirname, "public", "index.html"));
    console.log("Your index!");
})

// GET /api/notes
// Should read the db.json file and return all saved notes as JSON.db

// Working, console logs object 
// In class example response.json(response);
app.get("/api/notes", (request, response) => {

    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
        response.json(JSON.parse(jsonString));
        // json.parse
    })
})


// POST /api/notes -  Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// Test 

// var noteText = require("../data/waitinglistData");
// NOt yet working
app.post("/api/notes", function (request, response) {

    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString);
        // json.parse
        var notes = JSON.parse(jsonString);

        // Note object 
        const newNote = {
            title: request.body.title,
            text: request.body.text,
            // Github code 
            id: Math.random().toString(36).substr(2, 9)
        };

        // console.log(newNote);
        // array
        // let noteText = [];
        notes.push(newNote);
        // Will not push to newNote
        let NotesJSON = JSON.stringify(notes);
        // push to array 
        // then stringify 

        fs.writeFile(path.join(__dirname, "db", "db.json"), NotesJSON, (err) => {
            if (err) {
                return console.log(err);
            }
            // this is console logging
            console.log("Success!", NotesJSON);
            return NotesJSON;
        });

    })

});


// DELETE /api/notes/:id 
//  Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// Internal Server Error
app.delete('/api/notes/:id', function (request, response) {

    // console.log(request);
    // if (err) {
    //     console.log("Delete failed:", err)
    // }


    // set request to variable 
    // set request id

    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString);
        // json.parse
        var notes = JSON.parse(jsonString);

        // Note object 
        const newNote = {
            title: request.body.title,
            text: request.body.text,
            // Github code 
            id: Math.random().toString(36).substr(2, 9)
        };

        // console.log(newNote);
        // array
        // let noteText = [];
        notes.splice(request.params.id, 1);
        // notes.push(newNote);
        // Will not push to newNote
        let NotesJSON = JSON.stringify(notes);
        // push to array 
        // then stringify 

        fs.writeFile(path.join(__dirname, "db", "db.json"), NotesJSON, (err) => {
            if (err) {
                return console.log(err);
            }
            // this is console logging
            console.log("Success!", NotesJSON);
            return NotesJSON;
        });

    })

});
// Server listening confirmation
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});


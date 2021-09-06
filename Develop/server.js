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
app.get("/api/notes", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let id = crypto.randomBytes(16).toString("hex"); // unique ID per note
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: id,
    }
    console.log("newNote:", newNote)

    savedNotes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes), (err) => {
        if (err) throw err;
        console.log("error");
    });
    
    console.log("Your Notes!");
    return res.json(savedNotes);
});


// receives paramater containgin ID for deletion
app.delete("/api/notes/:id", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = savedNotes.filter(x=>x.id!=req.params.id)
    console.log("note id", noteID)
    console.log("req.params.id", req.params.id)

    fs.writeFileSync("./db/db.json", JSON.stringify(noteID), (err) => {
        if (err) throw err;
        console.log("error");
    });
    console.log("Note has been deleted");
    return res.json(savedNotes);
});

// returns notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  
  // returns index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  
  // Starts the server to begin listening
  app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
  });
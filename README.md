# Note-Taker
Homework-10 Note Taker App
Note Taker App using express js


* ['Note-Taker - Git Hub'](https://github.com/jamierachael/Note-Taker)
* ['Note-Taker - Git Hub IO'](https://jamierachael.github.io/Note-Taker/)
* ['Note-Taker - Demo Video'](https://drive.google.com/file/d/11pPBPW3RhpZX4lH-pgMqnsVJGMrA0VXR/view)


### Summary
* This project emphasizes the use of using ExpressJs with NodeJs and several npm packages to render a note taking app
* This project utilizes the use of Localhost as an API

### This project has the following features: 
* An Index JS document
    * This provides the logic for the client side (front end) of the app. 
* A Server JS document
    * This creates the entry point and routes to LocalHost 
* Two HTML documents
    * Index.html - client landing page
    * Notes.html - client interactive page for saved notes
* A CSS document
    * Provides styles for front end
* DB Folder
    * Contains a .JSON file that acts as a supplemental database
* Package.JSON
    * JSON and NPM packages and dependencies 

### Psuedo code:  
* The application frontend has already been created, it's your job to build the backend and connect the two.
* The following HTML (5) routes should be created:
* 1 - GET /notes - Should return the notes.html file.
* 2 - GET * - Should return the index.html file
* The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
* The following API routes should be created:
* 3 - GET /api/notes - Should read the db.json file and return all saved notes as JSON.
* 4 - POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* 5 - DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

### This project has script features of:
* Variable declaration area with required entry points
* 5 routes / API calls
* Event listeners and functions for saving and capturing note data

### This project features responsive design
### Has responsive layout for: 
* Mobile friendly design using Bootstrap

### To Execute File:
> Open in browser

### Features: 
* Two JS Pages
    * Index.js
    * Server.js
* Two JSON packages
* Node Modules Folder
* TWO HTML Pages
* One CSS Page
* One JSON file 


### Code Validation 
    * These use W3C Code Validators for HTML, CSS and Javascript
        * Format: ![Validator-HTML](assets/Validator-HTML-Index)
        * Format: ![Validator-HTML](assets/Validator-CSS)
        * Format: ![Validator-CSS](assets/Validator-JS-Index)
        * Format: ![Validator-CSS](assets/Validator-JS-generateHTML)











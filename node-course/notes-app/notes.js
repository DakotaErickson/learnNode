const chalk = require('chalk');
const fs = require('fs');


const getNotes = () => {
    return 'Your notes...';
} 

// load the existing notes from notes.json
const addNote = (title, body) => { 
    const notes = loadNotes();

    // check existing notes to ensure we aren't creating a duplicate title
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) { // add the new note
        notes.push({title: title, body: body});

        // save the notes
        saveNotes(notes);
        console.log(chalk.green('New note added.'));
    } else {
        console.log(chalk.red('Note title already taken.'));
    }


}
// convert the javscript object to JSON and write the data
const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => { 
    // try catch block to ensure that if notes.json doesn't exist we can create it
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const removeNote = (title) => { // load the existing notes from the file
    const notes = loadNotes();

    // filter out any notes with the matching title
    const notesToKeep = notes.filter((note) =>note.title !== title);

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red('No note found!'));
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};

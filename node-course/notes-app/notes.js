const chalk = require('chalk');
const fs = require('fs');

// load the existing notes from notes.json
const addNote = (title, body) => { 
    const notes = loadNotes();

    // check existing notes to ensure we aren't creating a duplicate title
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) { // add the new note
        notes.push({title: title, body: body});

        saveNotes(notes);
        console.log(chalk.green('New note added.'));
    } else {
        console.log(chalk.red('Note title already taken.'));
    }
}

const listNotes = () => {
    console.log(chalk.magenta.bold('Your notes:'));

    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = title => {
    // load in the notes
    const notes = loadNotes();

    // find the note with the matching title if it exists
    const note = notes.find(note => note.title === title);

    if (note){ // print the body if it exists
        console.log(chalk.blue.bold(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('Note doesn\'t exist'));
    }
    
}

// convert the javscript object to JSON and write the data
const saveNotes = notes => { 
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

const removeNote = title => { 
    const notes = loadNotes();

    // filter out any notes with the matching title
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red('No note found!'));
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};

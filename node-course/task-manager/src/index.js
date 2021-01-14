const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user.js');
const Task = require('./models/task.js');


const app = express();
const port = process.env.PORT || 3000;

// parses incoming json into an object
app.use(express.json());

// endpoint for creating a new User
app.post('/users', (req, res) => {
    const user = new User(req.body);
    
    user.save().then(() => { // send a 201 CREATED status code and the user document created when successful
        res.status(201).send(user);
    }).catch( e => { // send a 400 BAD REQUEST status code and the error if the creation errors out
        res.status(400).send(e);
    })
})

// endpoint for creating a new Task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => { // send a 201 CREATED status code and the user document created when successful
        res.status(201).send(req.body);
    }).catch( e => { // send a 400 BAD REQUEST status code and the error if the creation errors out
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})
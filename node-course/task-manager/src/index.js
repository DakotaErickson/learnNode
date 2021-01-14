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

// endpoint for fetching all users in the database
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch( e => {
        res.status(500).send();
    })
})

// endpoint for finding a user by id
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then( user => {
        if (!user){ // the request was valid but the requested user was not in the database
            return res.status(404).send();
        }

        res.send(user);

    }).catch( e => { // server error
        res.status(500).send();
    });
    
})

// endpoint for returning all tasks in the database
app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => {
        res.send(tasks);
    }).catch( e => {
        res.status(500).send();
    });
});

// endpoint for returning a task by ID
app.get('/tasks/:id', (req, res) => {
    Task.findById(req.params.id).then((task) => {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }).catch( e => {
        res.status(500).send();
    });

})

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})
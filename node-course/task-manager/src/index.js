const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user.js');
const Task = require('./models/task.js');


const app = express();
const port = process.env.PORT || 3000;

// parses incoming json into an object
app.use(express.json());


// USER ENDPOINTS

// create new
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send()
    }
})

// get all
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
})

// get by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) { // valid request but user doesn't exist
            res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
    
})


// TASK ENDPOINTS

// create new
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})

// get all
app.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
});

// get by ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) { // valid request but task doesn't exist
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send();
    }

})

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
})
const express = require('express');
const User = require('../models/user.js');
const router = new express.Router();


// create new
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send()
    }
})

// get all
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
})

// get by ID
router.get('/users/:id', async (req, res) => {
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

router.patch('/users/:id', async (req, res) => {
    // check that the requested updates are valid and return 400 if they aren't
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'age', 'email', 'password'];
    const isValidUpdate = updates.every( update => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({error: 'Invalid updates requested.'});
    }
    
    // if the requested updates are valid then try to make the change
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router;
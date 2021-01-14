const express = require('express');
const User = require('../models/user.js');
const router = new express.Router();
const auth = require('../middleware/auth.js');

// create new
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (e) {
        res.status(400).send(e)
    }
})

// login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (e) {
        res.status(400).send();
    }
})

// logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token); // clear out only matching token
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

// logout of all devices
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []; // clear out all tokens
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
})

// get profile
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
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

// update user
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
        const user = await User.findById(req.params.id);
        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

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
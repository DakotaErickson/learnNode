// CRUD create, read, update, delete

// const mongodb = require('mongodb');

// MongoClient is what allows us to connect to the database
const {MongoClient, ObjectID} = require('mongodb');


// if necessary we can create objectIDs manaully before inserting the document to that database
// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

// define the database URL and name
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// connect to the database passing in the URL, an options object, and a callback function to be ran
// once the connection is complete. Connecting is an asynchronous operation
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Error occurred connecting to database: ', error);
    }
    
    const db = client.db(databaseName);

    // db.collection('users').findOne({
    //     _id: new ObjectID("5fff4be5f1563312b155f19f")
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find document.');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({ name: 'Dakota'}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ name: 'Dakota'}).count((error, count) => {
    //     console.log(count);
    // })

    db.collection('tasks').findOne( {
        _id: new ObjectID("5fff47adc1096a118965a051")
    }, (error, task) => {
        if (error) {
            return console.log('Unable to find document.');
        }
        console.log(task);
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to find documents.');
        }
        console.log(tasks);
    })

});
// CRUD create read, update, delete

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

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5fff25abae7fe50b65ba3684")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // promise to match all documents in tasks with completed: false and change the status to true
    // log the matched count if successful or log the error if false
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.matchedCount);
    }).catch((error) => {
        console.log(error);
    })
});
const http = require('http');

const dateTime = require('./myFirstModule');

http.createServer(function (req, res) {
    res.write('Hello World! The current date/time are: ' + dateTime.myDateTime()); // write a response to the client
    res.end() // end the response
}).listen(8080) // the server object listen on port 8080
// the function passed into the `createServer` function will be executed whensomeone tries to access the computer on port 8080

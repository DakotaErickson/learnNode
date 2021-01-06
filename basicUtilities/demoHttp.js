const http = require('http');
const url = require('url');

// this is how you import a module the nodeJS way. There are ES6 imports as well.
const dateTime = require('./myFirstModule');



// `req` is the request(incoming) and the `res` is the response(sent back).
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'}); // declare the response code and content type)

    //res.write('Hello World! The current date/time are: ' + dateTime.myDateTime()); // write a response to the client

    res.write(req.url); // write the part of the url that comes after the domain name to the response

    res.end() // end the response
}).listen(8080) // the server object listen on port 8080
// the function passed into the `createServer` function will be executed whensomeone tries to access the computer on port 8080

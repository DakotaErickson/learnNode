const http = require('http');
const uc = require('upper-case');

// `req` is the request(incoming) and the `res` is the response(sent back).
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'}); // declare the response code and content type)

    res.write(uc.upperCase("Hello World!")); 

    res.end() // end the response
}).listen(8080) // the server object listen on port 8080
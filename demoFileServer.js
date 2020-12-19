const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    // parse the request url
    const q = url.parse(req.url, true);
    // this creates the filename as `./< whatever is passed after the domain >
    const filename = "." + q.pathname;

    // try to read the requested file from the local file system
    // if it isn't found write 404 Not Found to the response and return the response
    // else write 200 and the file data to the response and return
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
}).listen(8080);
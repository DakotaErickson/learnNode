// declare my imports
const http = require('http')
const fs = require('fs');

// create the http server to listen on 8080
http.createServer(function (req, res) {
    // call the readFile function passing in the name of the local html file
    // and a function with err and data parameters
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// append a new file with the specified name to the local file system
// gets created with the given content string
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// this opens the file with the specified name
// the `w` means that we are opening the file for writing
// if the file does not exist it will be created
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!!');
// })

// The fs.writeFile() method replaces the specified file and 
// content if it exists. If the file does not exist, a new file, 
// containing the specified content, will be created
// fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log("Saved!!!");
// })

// The fs.appendFile() method appends the specified content at the end of the specified file
// fs.appendFile('mynewfile1.txt', ' Append this text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// })

// the fs.unlink() method deletes the specified file
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('Deleted');
// })

// the fs.rename method renames a specified file
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('Renamed!');
// })


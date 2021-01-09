const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

// tell express which dir to associate with the server
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({forecast: '30 degrees', string: 'it is cold'});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})

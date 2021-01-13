const http = require('http');
const fs = require('fs');

// don't check API key into github
const dataBuffer = fs.readFileSync('../node-course/weather-app/api-key.json');
const dataString = dataBuffer.toString();
const keyJson = JSON.parse(dataString);
const weatherApiKey = keyJson['weather'];

const url = 'http://api.weatherstack.com/current?access_key=' + weatherApiKey + '&units=f&query=wichita';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });

})

request.on('error', (error) => {
    console.log('An error occurred.', error);
})

request.end();
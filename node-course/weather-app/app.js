const fs = require('fs');
const request = require('request');

// don't check API key into github
const apiKey = fs.readFileSync('api-key.txt');
const url = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&units=f&query=Wichita';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ' and ' + response.body.current.temperature + ' degrees F out and it feels like ' + response.body.current.feelslike + ' degrees F.');
    
})
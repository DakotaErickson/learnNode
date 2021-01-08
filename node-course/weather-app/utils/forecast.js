const fs = require('fs');
const request = require('request');

// don't check API key into github
const dataBuffer = fs.readFileSync('api-key.json');
const data = dataBuffer.toString();
const keyJson = JSON.parse(data);
const weatherApiKey = keyJson['weather'];


const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + weatherApiKey + '&units=f&query=' + latitude + ',' + longitude;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            })
        }
    })
}

module.exports = forecast;
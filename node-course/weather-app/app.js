const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

if (process.argv[2]) {
    geocode(process.argv[2], (error, {longitute, latitude, location} = {}) => {
        if (error) {
            return console.log(error);
        }
        forecast(longitute, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });

});
} else {
    console.log('Please enter a city name to get weather information.');
}
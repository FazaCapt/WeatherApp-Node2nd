// Callback Errors 
// abstracting Callbacks
// Wiring Up Weather Search
// Chaining Callbacks Together
// Intro to ES6 Promises 12:36

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Addres to fetch weither for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

//Jadi, maps.googleapis.com digabung dengan forecast.io
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`it's currently ${weatherResults.temperature}. it fell like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});
var request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/2821bc4ea736477220390e2e951e6d3b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forcast.io servers.');
        } else if (response.statusCode === 404) {
            callback('Unable to fetch weather.')
        } else if (response.statusCode === 200) {
            callback(undefined, ({
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            }))
        }
    })
};

//lat, lng, callback


module.exports.getWeather = getWeather;
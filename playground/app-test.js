var request = require('request');

request({
    url: 'https://api.darksky.net/forecast/2821bc4ea736477220390e2e951e6d3b/42.9959082.-75.2595731',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to forcast.io servers.');
    } else if (response.statusCode === 404) {
        console.log('Unable to fetch weather.')
    } else if (response.statusCode === 200) {
        console.log('Temperature: ', body.currently.temperature)
    }

    // console.log(response);
})

//Kalo divideo status codenya 400. tapi gue pakenya yang 404
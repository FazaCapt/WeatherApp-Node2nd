// abstracting Callbacks
// Wiring Up Weather Search

const request = require('request');

var geocodeAddress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address')

        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
        }
        // console.log(error);
    });
    //Untuk Parameter errornya masih banyak yang harus dipelajari
    //untuk callback dan object add, lat, long tidak perlu pake tanda kutip
}

module.exports.geocodeAddress = geocodeAddress;
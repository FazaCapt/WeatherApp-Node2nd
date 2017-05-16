// Pretty Printing Objects 
// What's Makes up an HTTP Request?

const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philladelphia',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2)); //prety printing object || menampilkan result object pada api
    // console.log(JSON.stringify(response, undefined, 2)); //What's Makes up an HTTP Request? || Menampilkan hasil Http Request
    // console.log(JSON.stringify(error, undefined, 2));
    // console.log(body); //buat ngetesting apakah apinya betul atau tidak
    // console.log(`Address: ${body.results[0].formatted_address}`); //harus ada arraynya
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`); //menentukan koordinat
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

//Output (error):
// {
//   "code": "ENOTFOUND",
//   "errno": "ENOTFOUND",
//   "syscall": "getaddrinfo",
//   "hostname": "mapooglpiscom",
//   "host": "mapooglpiscom",
//   "port": 80
// }
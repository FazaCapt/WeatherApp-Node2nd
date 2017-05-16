// Callback Functions & APIs 

const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philladelphia',
    json: true
}, (error, response, body) => {
    console.log(body);
});

//Output: 
// { results:
//    [ { address_components: [Object],
//        formatted_address: '1301 Lombard St, Philadelphia, PA 19147, USA',
//        geometry: [Object],
//        partial_match: true,
//        place_id: 'EiwxMzAxIExvbWJhcmQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDcsIFVTQQ',
//        types: [Object] } ],
//   status: 'OK' }
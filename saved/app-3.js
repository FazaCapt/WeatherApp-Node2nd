// Encoding User Input
// Menggunakan yargs 'https://www.npmjs.com/package/yargs'

const request = require('request');
const yargs = require('yargs');

var argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address', //ini harus sama dengan object addres.. (sensitive case)
            describe: 'Addres to fetch weither for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address); //mengammbil data yang dimasukan kedalam argv

//1301 lombard street

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    // console.log(body);
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

// encodeURIComponent() => Menyambung dengan %20
// decodeURIComponent() => menghilangkan %20
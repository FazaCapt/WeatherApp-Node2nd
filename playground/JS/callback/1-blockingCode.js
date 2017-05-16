var fs = require('fs');

var data = fs.readFileSync('contoh.txt');
console.log(data.toString());

// output: utf-8 (Huruf menjadi angka)
// console.log(data.toJSON());

console.log('- Program Selesai')
// Menggunakan peta secara umum

// Contoh ini menunjukkan bagaimana menggunakan peta pada String untuk mendapatkan array byte dalam pengkodean ASCII yang mewakili nilai karakter:

var map = Array.prototype.map;

var a = map.call('Hello Faza', (x) => {
    return x.charCodeAt(0);
});

console.log(a);
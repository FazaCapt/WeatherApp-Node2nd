// Yang ketiga adalah reduce. 
// Fungsi ini berguna jika kita mau melakukan sebuah operasi antar elemen dalam sebuah Array.

var sampleData = [1, 2, 3, 4, 5];

/* 
  Buat fungsi yang mengakumulasi keseluruhan elemen dalam Array.
  Hasil yang diharapkan 15
*/

// Menggunakan perulangan for

function denganPerulangan(data) {
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        result = result + data[i];
    }
    return result;
}


// Menggunakan reduce yang menerima fungsi lain sebagai parameternya
function denganReduce(data) {
    return data.reduce(function(elemenSebelumnya, elemenSekarang) {
        return elemenSebelumnya + elemenSekarang;
    });
}

console.log(denganPerulangan(sampleData));
console.log(denganReduce(sampleData));
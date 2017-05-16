// Yang kedua adalah filter. 
// Fungsi ini digunakan untuk menyeleksi elemen dari sebuah Array. 
// Hasil dari fungsi ini adalah Array baru yang dengan elemen yang sudah diseleksi.

var sampleData = [1, 2, 3, 4, 5, 6, 4, 3, 2];

/* 
  Buat fungsi yang menghasilkan Array yang isinya hanya bilangan genap.
  Hasil yang diharapkan [2, 4]
*/

// Menggunakan perulangan for
function denganPerulangan(data) {
    var expectedResult = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            expectedResult.push(data[i]);
        }
    }
    return expectedResult;
};

// Menggunakan filter yang menerima fungsi lain sebagai parameternya
function denganFilter(data) {
    return data.filter(function(item) {
        return item % 2 === 0;
    });
}

console.log(denganPerulangan(sampleData));
console.log(denganFilter(sampleData));
var sampleData = [1, 2, 3, 4, 5];
/* 
  Buat fungsi yang mengalikan setiap elemen dengan angka 2.
  Hasil yang diharapkan [2, 4, 6, 8, 10]
*/

// Menggunakan perulangan for
function denganPerulangan(data) {
    var expectedResult = [];
    for (var i = 0; i < data.length; i++) {
        var calculation = data[i] * 2;
        expectedResult.push(calculation);
    }
    return expectedResult;
}

// Menggunakan map yang menerima fungsi lain sebagai parameternya
function denganMap(data) {
    return data.map(function(item) {
        return item * 2;
    });
};

console.log(denganPerulangan(sampleData));
console.log(denganMap(sampleData));

//Penjelasan:
//Yang pertama adalah map. Fungsi ini digunakan untuk mengubah elemen-elemen dari sebuah Array dan hasil Array-nya akan memiliki panjang yang sama dengan Array aslinya.

//-------------------------------------------------------------------------
//Contoh 2:
var numbers = [4, 9, 16, 25];

function myX(x) {
    return x.map(Math.sqrt);
};

console.log(myX(numbers));

// Definisi dan Penggunaan
// Metode map() membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.
// Metode map() memanggil fungsi yang disediakan sekali untuk setiap elemen dalam array, secara berurutan.
// Catatan: map() tidak menjalankan fungsi untuk elemen array tanpa nilai.
// Catatan: map() tidak mengubah susunan aslinya.

// Syntax
// array.map(function(currentValue, index, arr), thisValue)

//-------------------------------------------------------------------------
//Contoh 3:
var person = [{ firstnama: "Faza", lastname: 'Fahammsyah' }, { firstnama: "Haris", lastname: 'panji' }, { firstnama: "soraya", lastname: 'ratna' }];

function getFullnName(item, index) {
    var fullname = [item.firstnama, item.lastname].join(' ');
    return fullname;
};

function myMap(x) {
    return x.map(getFullnName);
};

console.log(myMap(person));
// Output: [ 'Faza Fahammsyah', 'Haris panji', 'soraya ratna' ]
//-------------------------------------------------------------------------
//Contoh 3:

var angka = [1, 2, 3];

var ganjil = angka.map((num) => {
    if (num % 2 == 1) {
        return num;
    }
})

console.log(ganjil);
//Output:  [ 1, undefined, 3 ]

//-------------------------------------------------------------------------
//Contoh 3:

var warga = [
    { Nama: 'Ali', jk: 'L' },
    { Nama: 'bayu', jk: 'L' },
    { Nama: 'Rina', jk: 'P' }
];

var nama = warga.map((elem) => {
    return elem.Nama;
});

var laki2 = warga.map((elem) => {
    if (elem.jk == 'L') {
        return elem;
    }
});

// console.log('Nama: ', nama);
console.log('Jenis Kelamin: ', laki2);
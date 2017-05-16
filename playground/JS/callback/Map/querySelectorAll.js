// Menggunakan peta secara umum querySelectorAll

// Contoh ini menunjukkan bagaimana melakukan iterasi melalui kumpulan objek yang dikumpulkan oleh querySelectorAll. Dalam hal ini kita mendapatkan semua pilihan yang dipilih di layar dan dicetak di konsol:

// var elems = document.querySelectorAll('select option:checked');

// var values = Array.prototype.map.call(elems, (obj) => {
//     return obj.value;
// });

// console.log(values);

// Cara yang lebih mudah adalah menggunakan metode Array.from ().

const bar = [1, 2, 3, 4];
console.log(Array.from(bar));
console.log(Array.from('foo'));

// Syntax

// Array.from(arrayLike[, mapFn[, thisArg]])

//Penjelasan:
//Parameter
// ArrayLike
// Objek seperti array atau iterable untuk dikonversi ke array.
// MapFn Opsional
// Fungsi peta memanggil setiap elemen array.
// thisArg Opsional
// Nilai untuk digunakan seperti ini saat menjalankan mapFn.
// return
// Contoh Array yang baru.


//Array from a String
console.log(Array.from('Foo'));

// Array from a Set
// var s = new Set(['Foo', window]);
// console.log(Array.from(s));

//array from a map
var m = new Map([
    [1, 2],
    [2, 3],
    [3, 4]
]);
console.log(Array.from(m));

// Array from an Array-like object (arguments)

function f() {
    return Array.from(arguments);
};
console.log(f(1, 2, 3));

// Using arrow functions and Array.from
// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], x => x + x));

// Buat urutan angka
// Karena array diinisialisasi dengan `undefined` pada setiap posisi,
// nilai `v` di bawah ini akan` undefined`

console.log(Array.from({ length: 5 }, (v, i) => i));
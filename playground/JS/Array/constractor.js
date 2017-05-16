// Definisi dan Penggunaan
// Dalam JavaScript, properti konstruktor mengembalikan fungsi konstruktor untuk sebuah objek.
// Nilai kembalian adalah referensi ke fungsi, bukan nama fungsinya:
// Untuk array JavaScript properti constructor mengembalikan fungsi Array () {[native code]}
// Untuk nomor JavaScript properti constructor mengembalikan fungsi Number () {[native code]}
// Untuk senar JavaScript properti constructor kembali berfungsi String () {[native code]}
var myFunction = () => {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.constructor;
}

console.log(fruits);
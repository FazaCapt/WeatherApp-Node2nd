//Metode forEach() menjalankan fungsi yang disediakan sekali untuk setiap elemen array.
//=========== 1 ================
// var a = ['a', 'b', 'c'];

// a.forEach((Element) => {
//     console.log(Element);
// });

//output:
// a
// b
// c

//============= 2 (Printing the contents of an array)=================
// var logArrayElements = (elements, index, array) => {
//     console.log(`a[${index}]= ${elements}`)
// }

// [2, 5, 9].forEach(logArrayElements);
//============== Modifikasi ================
// var logArrayElements = (a, b, c) => {
//     console.log(`a[${b}]= ${a}` + c)
// }

// [2, 5, 9].forEach(logArrayElements);

//============= 3 (Using thisArg) =======================
var Counter = () => {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = (array) => {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
    }, this)
};

var obj = new Counter();
obj.add([2, 4, 7]);
obj.count;
obj.sum;


//Rumus:
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

//Penjelasan Rumus:
// Callback
// Fungsi untuk mengeksekusi untuk setiap elemen, mengambil tiga argumen:
// CurrentValue
// Elemen saat ini sedang diproses dalam array.
// indeks
// Indeks elemen saat ini sedang diproses dalam array.
// Array
// Array yang untuk Setiap () sedang diterapkan.

// thisArg Opsional
// Nilai untuk digunakan seperti ini (yaitu Objek referensi) saat menjalankan callback.
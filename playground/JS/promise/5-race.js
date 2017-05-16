// Promise.race()

// Method ini memiliki fungsi yang sama persis dengan Promise.all(), yang membedakan adalah jika ada salah satu Promise yang fulfilled atau rejected maka hasilnya akan segera dikembalikan.

var promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('promise 1 sukses');
    }, 2000);
});

var promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('promise 2 sukses');
    }, 3000);
});

// masukkan kedua object Promise di atas ke dalam array
var batchProcessed = [promiseOne, promiseTwo];

Promise.race(batchProcessed).then(function(result) {
    // result akan segera ada isinya begitu salah satu Promise fulfilled
    console.log(result); // Yang pertama kali resolve yang akan tampil: "promise 1 sukses"
}).catch(function(error) {
    // error akan segera terisi saat ada yang rejected
    console.log(error);
});

// Jika ada salah satu Promise yang fulfilled atau rejected, maka Promise tersebut akan segera dikembalikan tanpa harus menunggu Promise lain selesai.

// Promise adalah cara yang lebih advance dalam menangani asynchronous process di JavaScript.
// Semua pemrogram JavaScript harus dapat menguasai teknik ini agar dapat menghasilkan program yang baik dan mudah terbaca.
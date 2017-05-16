// Promise.all()

// Dengan menggunakan method ini kita dapat menjalankan banyak asynchronous function dengan menggunakan beberapa Promise sekaligus. 
// Promise.all() membutuhkan argumen berupa Array yang isinya object Promise.


var promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise 1 Success');
    }, 2000);
});

var promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise 2 Success');
    }, 3000);
});

var batchPrcessed = [promiseOne, promiseTwo];

Promise.all(batchPrcessed).then(function(result) {
    // kedua Promise di atas resolve
    console.log(result); // hasilnya akan berbentuk array: ["promise 1 sukses", "promise 2 sukses"]
}).catch(function(error) {
    // salah satu atau kedua Promise di atas reject
    console.log(error);
})

// Jika semua Promise sukses dikembalikan, maka hasil yang didapat dari .then() akan berisi Array dari hasil setiap Promise. 
// Tetapi jika salah satu Promise ada yang rejected, maka .catch() akan berisi reason dari Promise yang gagal pertama kali tersebut.
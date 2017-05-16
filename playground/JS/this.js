// Menggunakan `this` dalam Object JavaScript

//this Adalah sebuah keyword di JavaScript.
// this, ini.

// Secara singkat, di dalam object JavaScript, this digunakan untuk menunjukkan sebuah properti milik object tersebut. 
// Sebagai contoh, this.x menunjuk pada properti x milik object di mana properti tersebut dibuat. Untuk pembahasan lebih dalam, mari kita lihat potongan kode berikut

var car = {
    // speed adalah properti milik object car
    speed: 50,

    // run adalah properti berupa fungsi, milik object car
    run: function(x) {
        // untuk mengakses properti speed, kita panggil this.speed
        // x digunakan untuk mengakses variabel yang dibuat di fungsi start()
        console.log("I run at " + this.speed + " on " + x + " wheels.");
    },

    // start adalah properti berupa fungsi, milik object car
    start: function() {
        console.log("I am starting");
        this.speed = 20;

        // variabel lokal, milik fungsi start()
        var wheels = 4;
        this.run(wheels);
    }
}
car.start();


//Penjelasan: 
// Potongan kode tadi jika dijalankan akan menghasilkan pesan:

// I am starting
// I run at 20 on 4 wheels.

// Object car di contoh tadi, memiliki 3 properti, yakni speed, start dan run.
// Properti speed berisi 1 nilai, sementara 2 properti lainnya adalah fungsi.
// Kita bisa melihat, di dalam start, properti speed diubah dengan mengakses serta langsung diubah isinya. Ini dilakukan oleh pernyataan

// this.speed = 20;

// Sehingga, speed yang awalnya bernilai 50, berubah menjadi 20 saat script dijalankan.
// Selain itu, fungsi run() juga dipanggil oleh fungsi start() dengan menggunakan this.run() karena ia adalah properti milik object car yang juga memiliki fungsi start() tadi.
// Jika kita hanya memanggil run() kita akan mendapatkan error yang menyatakan bahwa run() belum didefinisikan.
// Pemanggilan tersebut baru berlaku, jika di dalam script, kita memang memiliki fungsi lain bernama run().

// Contohnya sebagai berikut:
//     function run() {
//         // tubuh fungsi
//     }
// }

// var car = {
//     ...
//     run(); // bisa berjalan, karena ada fungsi run() di luar objek
//     ...
// }

// Properti milik object ini berbeda dengan variabel lokal milik fungsi tertentu.
// Properti speed bisa diakses di bagian manapun di dalam object, dengan menggunakan kata depan this. Sebuah variabel yang dibuat di dalam fungsi, dengan keyword
// var berarti bahwa variabel tersebut bersifat lokal dan hanya bisa digunakan di fungsi tempat ia dibuat.

// Jika ingin menggunakan variabel lokal dari fungsi lain, maka ada banyak cara.
// Yang jelas, pemanggilan variabel lokal dengan this, tidak dimungkinkan.
// Salah satu cara favorit saya, adalah dengan memanggil fungsi lain tersebut di dalam fungsi tempat variabel lokal dibuat.
// Pemanggilan fungsi ini kemudian dilakukan dengan juga mengikutsertakan argumen.
// Dengan demikian, Variabel lokal telah digunakan di fungsi lain. 
// Bonusnya, kita tidak mengotori global namespace, sehingga kode bisa lebih bersih dari kemungkinan lebih dari 1 variabel memiliki nama sama.

// Itulah sedikit pembahasan mengenai keyword this di dalam object JavaScript.
// Jika ingin membaca lebih banyak, link berikut menjelaskan konsep ini dengan lebih detail.
// Yang jelas, kita tidak perlu takut dengan“ keunikan” JavaScript.
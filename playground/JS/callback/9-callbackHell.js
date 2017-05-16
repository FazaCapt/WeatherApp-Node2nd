// Callback Hell

// Dalam Bahasa Indonesia bisa diartikan sebagai neraka callback, ini adalah satu kondisi di mana sebuah asynchronous function harus dieksekusi setelah asynchronous function sebelumnya sukses dijalankan. 
// Biasanya jika callback sudah terlalu dalam, akan membuat kode menjadi sulit dibaca oleh pemrogram.

/**
  MASALAH:
  Anggap kita punya 3 asynchronous function yang harus dijalankan berurutan.
  Jadilah callback hell seperti di bawah ini.
  Apalagi jika kita harus menjalankan operasi tertentu di antara
  callback-callback tersebut yang membuat kode menjadi panjang, dan tentunya
  makin sulit dibaca.
*/
jQuery.get('http://example.com/data.json', function(response) {
    // lakukan sesuatu dengan `response` dari operasi 1

    jQuery.get('http://example.com/data-2.json', function(response) {
        // lakukan sesuatu dengan `response` dari operasi 2

        jQuery.get('http://example.com/data-3.json', function(response) {
            // lakukan sesuatu dengan `response` dari operasi 3

        });
    })
});

/**
  SOLUSI:
  Gunakan function yang diberi nama daripada menggunakan anonymous function
  seperti di atas.
*/
jQuery.get('http://example.com/data.json', afterFirstOps);

function afterFirstOps(response) {
    // lakukan sesuatu dengan `response` dari operasi 1

    jQuery.get('http://example.com/data-2.json', afterSecondOps);
}

function afterSecondOps(response) {
    // lakukan sesuatu dengan `response` dari operasi 2

    jQuery.get('http://example.com/data-3.json', afterThirdOps);
}

function afterThirdOps(response) {
    // lakukan sesuatu dengan `response` dari operasi 3

}

// Ada 3 aturan yang jika diikuti dapat mengurangi kemungkinan Callback Hell, yaitu:

// Usahakan desain program tanpa perlu menggunakan fungsi yang bersarang (nested function) seperti contoh di atas. 
// Kalaupun terpaksa, maka usahakan buat sedangkal mungkin.

// Jika harus bersarang, maka callback-nya menggunakan fungsi yang memiliki nama untuk mempermudah dalam membaca kode. 
// Penggunaan anonymous function akan membuat kode sulit dibaca seperti contoh di atas, dan akan menyulitkan juga dalam membuat unit testing.

// Hindari duplikasi fungsi yang memiliki kegunaan yang sama dengan cara menjadikan modul. 
// Jika kita memprogram untuk server-side dengan menggunakan Node.js kita bisa menggunakan sistem modulnya, tetapi jika kita memprogram untuk sisi client-side, maka kita dapat menggunakan tools bantuan seperti Browserify, RequireJS, atau Webpack.

// Callback function merupakan pengetahuan dasar yang harus dikuasai saat memprogram asynchronous pada JavaScript. Karena jika kita sudah menguasai tentang callback function, maka kita akan lebih mudah untuk nantinya menggunakan teknik memprogram asynchronous dengan yang lebih advance seperti Promise.
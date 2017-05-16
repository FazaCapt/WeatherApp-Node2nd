/**
  Buat object dari Promise-nya.
*/

var janjiBunga = new Promise(function(resolve, reject) {
    var http = new XMLHttpRequest();
    var url = '/bunga';
    var params = 'Jumlah = 1000000';

    http.open('POST', url, true);
    http.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            resolve(1000000); // 2. Uangmu sukses dikembalikan oleh Bunga (Ini value-nya hardcoded.)
        }

    }

    http.onerror = function() {
        reject('Saya belum bisa bayar. Proyek saya gagal.') // 3. Ketika gagal, Bunga akan memberikan alasan
    }

    http.send(params); // 1. Kamu mengirimkan uang pada Bunga
});

console.log(janjiBunga); // hasilnya Promise { <Pending> }, karena operasi httprequest di atas belum selesai.

/**
  Sekarang saatnya kamu menagih Bunga.
  Methodnya bernama .then() untuk memproses hasil yang sukses dan .catch() untuk menerima error.
*/

janjiBunga.then(function(uang) {
    console.log(uang);
}).catch(function(error) {
    console.log(error);
});

/**
  Fungsi di bawah ini untuk mensimulasikan permintaan Lebah.
*/
function lebahInginBerhutang(janji) {
    janji.then(function(uang) {
        console.log(uang); // Isinya 1 juta
    }).catch(function(error) {
        console.log(error); // Isinya 'Saya belum bisa bayar. Proyek saya gagal.'
    })
}

// Kamu menyuruh Lebah untuk menagih uangmu dengan melempar Promise sebagai argumen
console.log(lebahInginBerhutang(janjiBunga));
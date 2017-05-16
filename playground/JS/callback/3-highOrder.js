//Contoh High order functions

function salam(time) {
    return function(userName) {
        return time + ' ' + userName;
    }
}

//Jika dipanggil langsung
var greet = salam('Selamat Pagi')('Faza');
console.log(greet);
//Output: Selamat Pagi Faza

// Jika dimasukkan ke dalam variable
var greeting = salam('selamat Pagi');
greeting; // Hasilnya: function(userName) { return time + " " + userName; }

// setelah disimpan dalam variable
// fungsi tersebut bisa diselesaikan pemanggilannya
console.log(greeting('Panji'));
console.log(greeting('Zulkifli'));
//output: 
// selamat Pagi Panji
// selamat Pagi Zulkifli

//Penjelasan:
// Jika kita perhatikan potongan kode di atas, maka kita dapat lihat keuntungan dari menerapkan higher-order functions. Kita dapat memanggil sebuah fungsi secara langsung seperti pada baris kode ke-9, maupun secara partial seperti pada baris kode ke-12 sampai selesai. Fungsi yang bisa dipanggil secara partial biasa disebut juga dengan curried function atau currying.
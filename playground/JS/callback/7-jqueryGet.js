/**
  Di bawah ini adalah penjelasan bagaimana asynchronous bekerja.
  Saya ambil contoh jQuery.get() dan sebuah operasi penjumlahan sederhana.
  Ini adalah function dari pustaka jQuery untuk melakukan pemanggilan data menggunakan ajax.
*/

// Program akan mengeksekusi baris 8
jQuery.get('http://example.com/data.json', iniCallback);

// Baris ke 14 sampai ke 15 baru akan tereksekusi hanya saat jQuery.get()
// benar-benar sudah selesai mengunduh keseluruhan data.json-nya.
// Nilai dari jQuery.get() didapat pada baris ke 14. Variabel 'data'.
function iniCallback(data) {
    console.log(data);
    console.log('all data has been donwloaded');
}

// Tanpa menunggu jQuery.get() selesai dieksekusi, baris 19 langsung dieksekusi.
var hasil = 1 + 5;

/**
  Callback juga dapat ditulis dengan menggunakan anonymous function seperti
  di bawah ini.
*/
jQuery.get('http://example.com/data.json', function(data) {
    console.log(data);
    console.log('all data has been downloaded');
});
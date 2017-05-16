// Kesalahan fatal pemrogram JavaScript pemula
// Ada satu kesalahan fatal yang sering saya temukan pada pemrogram JavaScript pemula saat menghadapi kode asynchronous, yaitu mencoba menyimpan nilai dari operasi asynchronous ke dalam global variable ataupun variabel dengan scope di luar callback dengan harapan dapat menggunakan nilai tersebut pada operasi berikutnya.

/**
  Pemrogram berusaha menyimpan nilai dari callback ke dalam variabel
  yang berada di luar scope callback.
*/
var iniVariabelGlobal;

jQuery.get('http://example.com/data.json', function(data) {
    iniVariabelGlobal = data; // pemrogram berusaha menyimpan data ke dalam global variable
});

// Isi variabelnya sudah pasti `undefined`
// Karena baris di bawah ini dieksekusi sebelum jQuery.get() selesai.
console.log(iniVariabelGlobal);


//====================== Perbandingan ========================

// Tidak ada solusi khusus untuk memecahkan masalah seperti kode di atas, selain dengan mengubah pola pikir kita dalam membuat program, yang sebelumnya terbiasa dengan synchronous menjadi asynchronous. Jangan pernah menggunakan global variable seperti cara di atas tapi manfaatkan penamaan fungsi untuk membuat kode yang lebih mudah dibaca.

/**
  Misalnya kita memiliki fungsi yang baru dapat dijalankan setelah ada nilai dari jQuery.get(),
  jangan gunakan global variable seperti sebelumnya. Buatlah sebuah fungsi baru di luar asynchronous function
  yang dapat dipanggil setelah jQuery.get() selesai.
*/

jQuery.get('http://example.com/data.json', function(data) {
    doSomething(data); // lempar data dari server ke dalam sebuah fungsi
});

function doSomething(dataFromServer) {
    // lakukan operasi sesuatu di sini.
    console.log(dataFromServer);
}
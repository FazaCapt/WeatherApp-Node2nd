// Event Loop Node JS, Apa dan Bagaimana ?

// Node JS adalah aplikasi thread tunggal yang mendukung konkurensi melalui konsep event dan callback. 
// Untuk mempertahankan konkurensi, Node JS menggunakan fungsi-fungsi yang sifatnya Asynchronous dimana fungsi-fungsi Asynchronous tersebut merupakan thread tunggal. 
// Node JS menggunakan pola observer. 
// Thread Node JS menjaga event loop untuk terus memeriksa event-event yang terdaftar dan menyelesainakn tugas yang diberikannya. setiap event akan memberikan sinyal kepada fungsi listener sehingga fungsi listener ini akan dijalankan ketika event diaktifkan.

// Konsep sederhananya adalah :
// Pemrograman event-driven adalah program yang kontrol aliran aplikasinya ditentukan oleh peristiwa (event) atau perubahan state.
// Node JS banyak menggunakan event dan itu juga menjadi salah satu alasan mengapa Node JS cukup cepat dibandingkan dengan teknologi lainnya yang sejenis. 
// Begitu Node memulai server, Node akan menginisialisasi variabel, menyatakan fungsi-fungsi yang digunakan dan kemudian hanya menunggu event yang terjadi.
// Dalam aplikasi Event-Driven, umumnya memiliki loop utama sebagai listener (Event Loop) untuk event dan kemudian akan memicu fungsi event listener untuk dijalankan ketika salah satu event terdeteksi.
// dalam hal lain, misalnya pada konsep callback. kita menggunakan fileRead() sebagai fungsi asynchronous untuk membaca file. fileRead() akan ditangani oleh event loop dimana ketika selesai membaca file maka fungsi callback akan dipanggil.
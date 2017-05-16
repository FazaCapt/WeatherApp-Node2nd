var fs = require('fs');

fs.readFile('contoh.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('- Program Selesai');

// Penjelasan Singkat
// (block dan non-block code) menjelaskan tentang konsep panggilan blocking dan nonblocking code. 
// contoh pertama menunjukkan bahwa blocking code akan terus mengeksekusi tugas yang diberikan yaitu membaca file contoh.txt barulah setelah itu program akan mengeksekusi kode di bawahnya untuk mencetak “-Program Selesai”. 
// lalu pada contoh kedua, program tidak menunggu dalam menyelesaikan tugas untuk membaca file, tetapi program akan terus mengeksekusi perintah di bawahnya yaitu mencetak “-Program Selesai” dan dalam waktu yang sama pula program akan mencetak isi file setelah selesai dari tugasnya yaitu pembacaan file.

// Kesimpulan
// Jadi blocking code dieksekusi secara berurutan dari atas sampai bawah sedangkan kalau non-blocking code tidak dieksekusi secara berurutan. 
// dengan demikian agak sulit menerapkan logika terstruktur di program non-blocking code dibandingkan dengan blocking code, sehingga dalam kasus ini program mesti menggunakan data untuk diproses dimana data tersebut harus disimpan dalam blok yang sama untuk membuatnya dieksekusi secara berurutan.
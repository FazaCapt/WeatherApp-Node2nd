#### cara penggunaannya:
1. node app-promise.js -a '12345' (nama tempat)

Step:
1. http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philladelphia
2. npm init -y
3. npm install request 'https://www.npmjs.com/package/request'
4. create file app.js
5. npm install yargs --save 'https://www.npmjs.com/package/yargs'
6. Buat file geocode/geocode.js
7. Open browser 'https://darksky.net/forecast/-6.175,106.8286/si24/en'
8. buat akun developer.forcast 'https://darksky.net/dev/'
9. https://api.darksky.net/forecast/[key]/[latitude],[longitude] => API-key-nya diganti 'https://darksky.net/dev/docs/forecast'
10. npm install axios 'https://www.npmjs.com/package/axios'


#### Penjelasan / Pengertian:

1. Queue: sekumpulan data yang mana penambahan elemen hanya bisa dilakukan pada suatu ujung disebut dengan sisi belakang(rear), dan penghapusan(pengambilan elemen) dilakukan lewat ujung lain (disebut dengan sisi depan atau front). 
- Pada Stack atau tumpukan menggunakan prinsip LIFO (Last In First Out) atau FIFO (First In First Out).
- Karakteristik Queue atau antrian :
1. elemen antrian
2. front (elemen terdepan antrian)
3. tail (elemen terakhir)
4. jumlah elemen pada antrian
5. status antrian
- Operasi pada Queue atau antrian
1. tambah(menambah item pada belakang antrian)
2. hapus (menghapus elemen depan dari antrian)
3. kosong( mendeteksi apakah pada antrian mengandung elemen atau tidak)
- Operasi2 Queue :
1. Create()
Untuk menciptakan dan menginisialisasi Queue
Dengan cara membuat Head dan Tail  = -1
 
2. IsEmpty()
Untuk memeriksa apakah Antrian sudah penuh atau belum
Dengan cara memeriksa nilai Tail, jika Tail = -1 maka empty
Kita tidak memeriksa Head, karena Head adalah tanda untuk kepala antrian (elemen pertama dalam antrian) yang tidak akan berubah-ubah
Pergerakan pada Antrian terjadi dengan penambahan elemen Antrian kebelakang, yaitu menggunakan nilai Tail.
Queue pada Struktur Data
 
3. IsFull
Untuk mengecek apakah Antrian sudah penuh atau belum
Dengan cara mengecek nilai Tail, jika Tail >= MAX-1 (karena MAX-1 adalah batas elemen array pada C) berarti sudah penuh
Queue pada Struktur Data
 
 
4. Enqueue
Untuk menambahkan elemen ke dalam Antrian, penambahan elemen selalu ditambahkan di elemen paling belakang
Penambahan elemen selalu menggerakan variabel Tail dengan cara increment counter Tail terlebih dahulu
Queue pada Struktur Data
 
5. Dequeue()
Digunakan untuk menghapus elemen terdepan/pertama (head) dari Antrian
Dengan cara menggeser semua elemen antrian kedepan dan mengurangi Tail dgn 1
Penggeseran dilakukan dengan menggunakan looping.

Queue pada Struktur Data
 
6. Clear()
Untuk menghapus elemen-elemen Antrian dengan cara membuat Tail dan Head = -1
Penghapusan elemen-elemen Antrian sebenarnya tidak menghapus arraynya, namun hanya mengeset indeks pengaksesan-nya ke nilai -1 sehingga elemen-elemen Antrian tidak lagi terbaca
Queue pada Struktur Data
 
7. Tampil()
Untuk menampilkan nilai-nilai elemen Antrian
Menggunakan looping dari head s/d tail

8. Axios
    Promise berbasis klien HTTP untuk browser dan node.js
        fitur: 
            Buat XMLHttpRequests dari browser
            Buat request http dari node.js
            Mendukung promise API
            Mencegat request dan respon
            Mentransformasi request dan respon data
            Batalkan request
            Transformasi otomatis untuk data JSON
            Dukungan sisi klien untuk melindungi terhadap XSRF


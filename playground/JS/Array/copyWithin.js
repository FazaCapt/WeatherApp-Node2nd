// Metode copyWithin() menyalin elemen array ke dalam array, ke dan dari posisi tertentu.

var fruits = ['pepaya', 'lemon', 'Jeruk', 'apple'];

var buah = fruits.copyWithin(2, 0, 4);

console.log(buah);

// Syntax
// array.copyWithin(target, start, end)

// Deskripsi Parameter
// Target => yang disyaratkan Posisi indeks untuk menyalin elemen ke
// Start => disyaratkan Posisi indeks untuk mulai menyalin elemen dari
// End => Opsional. Posisi indeks untuk menghentikan penyalinan elemen dari (default adalah array.length)
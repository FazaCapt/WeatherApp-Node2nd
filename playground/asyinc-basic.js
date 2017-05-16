console.log('Starting Up');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);


setTimeout(() => {
    console.log('Second SetTimeout');
}, 0);


console.log('Finishing UP');

//======== Hasil Output ============
// Starting Up
// Finishing UP
// Second SetTimeout
// Inside of callback

//======== Keterangan =================

//Jadi, server akan menjalankan data yang lebih dahulu. bisa mngerjakan banyak kerjaan
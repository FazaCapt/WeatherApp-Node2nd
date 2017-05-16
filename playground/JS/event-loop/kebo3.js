// Kita juga bisa membuat banyak event di dalam program. misalnya untuk kode di atas kita hanya memiliki satu event dengan nama namaEvent . selanjutnya kita akan membuat satu event lagi bernama event koneksi, dimana event ini akan diaktifkan di dalam event-handler bernama penganananEvent yang diikat oleh namaEvent.

var events = require('events');

var eventEmitter = new events.EventEmitter();

function penganananEvent(args) {
    console.log('(namaEvent) event ditangani...');
    //mengaktifkan event didalam event handler 'penangananEvent'
    eventEmitter.emit('koneksi');
}

function penanganKoneksi() {
    console.log('(Koneksi) Koneksi ditangani');
}

eventEmitter.on('namaEvent', penganananEvent);
eventEmitter.on('namaEvent', penanganKoneksi);
eventEmitter.emit('namaEvent');

console.log('Program berakhir');
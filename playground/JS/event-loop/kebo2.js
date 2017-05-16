// pada contoh kedua, kita akan menambahkan satu event-handler lagi dan mengikat event-handler tersebut bersama event namaEvent . event-handler ini bernama penangananKoneksi.


var events = require('events');

var eventEmitter = new events.EventEmitter();

//Fungsi
function penangananEvant() {
    console.log('Event ditanganani');
};

function penangananKoneksi() {
    console.log('Penangan koneksi berhasil dijalankan');
}

eventEmitter.on('namaEvent', penangananEvant);
eventEmitter.on('namaEvents', penangananKoneksi);

eventEmitter.emit('namaEvent');
console.log('program Berakhir');

//Jadi Event emitter itu untuk membinging beberapa fungsi / event menjadi satu perintah, atau sekali jalan
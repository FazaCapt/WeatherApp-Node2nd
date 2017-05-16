var events = require('events');

var eventEmitter = new events.EventEmitter();

function tugasKaryawan(kodeKaryawan, namaTugas, batas, waktu) {
    var counter = 0;
    var interval = setInterval(function() {
        console.log(kodeKaryawan, 'Melakukan tugas: ', namaTugas, 'Ke: ', counter++);
        if (counter == batas) {
            clearInterval(interval);
            console.log(kodeKaryawan, ' Tugas selesai.')
        }
    }, waktu);
};

function karyawan1() {
    var kode = 'K001',
        tugas = 'Ngetik Naskah',
        batas = '10',
        waktu = '2000'
    console.log(kode, 'Mulai bekerja');
    tugasKaryawan(kode, tugas, batas, waktu);
}

function karyawan2() {
    var kode = 'K002',
        tugas = 'Nyeduh Kopi',
        batas = '5',
        waktu = '1000'
    console.log(kode, 'Mulai bekerja');
    tugasKaryawan(kode, tugas, batas, waktu);
};

function startPekerjaan() {
    eventEmitter.on('kantor', karyawan1);
    eventEmitter.on('kantor', karyawan2);
    eventEmitter.emit('kantor');
}

eventEmitter.on('start', startPekerjaan);

eventEmitter.emit('start');
console.log('Program Berakhir');
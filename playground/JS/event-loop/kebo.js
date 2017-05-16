//Mengimport Module events
var events = require('events');
//Membuat objek event emitter
var eventEmitter = new events.EventEmitter();

//membuat fungsi u/ menangani event
function penangananEvent() {
    console.log("Event di Tangani....");
};

//mengikat (binding) event dengan event handler (listerner)
eventEmitter.on('namaEvent', penangananEvent);

//mengaktifkan event
// eventEmitter.emit('namaEvent');

console.log("Perogram Berakhir");
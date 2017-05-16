// .catch()

// Method .catch() akan dieksekusi hanya saat Promise berada di kondisi rejected.


var samplePromise = new Promise(function(resolve, rejected) {
    // setTimeout untuk mensimulasikan async function
    setTimeout(function() {
        // Dapat diisi apapun. Yang paling umum menggunakan object Error
        reject(Error("Sengaja dibuat salah"));
    }, 5);
});

samplePromise.then(function(data) {
    console.log(data); // tidak terpanggil
}).catch(function(error) {
    console.log(error); // isinya object Error
})
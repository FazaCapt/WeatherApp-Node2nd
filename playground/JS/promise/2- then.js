// .then()

// Method .then() dapat dibuat menjadi berantai atau istilahnya chaining. 
//Berikut ini contoh chaining .then() secara sederhana.

var samplePromise = new Promise(function(resolve, reject) {
    // setTimeout untuk mensimulasikan async function
    setTimeout(function() {
        resolve(5);
    }, 5);
});

samplePromise.then(function(data) {
    console.log(data); //isinya 5
    return data * 2;
}).then(function(data) {
    console.log(data); //isinya 10
    return data * 2;
}).then(function(data) {
    console.log(data); //isinya 10
});

// Setiap .then() menerima hasil dari nilai .then() yang sebelumnya. 
// Jika Promise telah resolved tapi .then() dipanggil lagi, maka callback-nya akan dipanggil saat itu juga. 
// Sebaliknya, jika .then() dipanggil setelah Promise rejected, maka callback-nya tidak akan pernah dipanggil.
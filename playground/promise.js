// Intro to ES6 Promises 12:36
// Advanced Promises 17:38

var assyncAdd = ((a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 2500);
    })
});

//ini yang sudah diedit, jadi hasil harus memenuhi 1 promise baru menjalankan promise baru

assyncAdd(7, '8').then((res) => {
    console.log('Result: ', res);
    return assyncAdd(res, 33) //Jangan lupa dengan fungsinya
}).then((res) => {
    console.log('Should Be 48', res)
}).catch((errorMessage) => {
    console.log(errorMessage);
})

//============== Ini yang belum diedit =====================
// assyncAdd(7, 8).then((res) => {
//     console.log('Result: ', res);
//     return assyncAdd(res, 33) //Jangan lupa dengan fungsinya
// }, (errorMessage) => {
//     console.log(errorMessage)
// }).then((res) => {
//     console.log('Should Be 48', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Its worked!');
//         reject('unable to fullfill Promise');
//     }, 2500);

// });

// promise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });
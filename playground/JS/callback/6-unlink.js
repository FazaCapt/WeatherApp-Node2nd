// Asynchronous unlink (2). 
// Tidak ada argumen selain pengecualian yang mungkin diberikan pada penyelesaian panggilan balik.

// fs.unlink(path, callback) || Syntax

/**
  Tiga operasi menghapus file di bawah ini, walaupun disusun berurutan
  tetapi belum tentu selesainya berurutan dari operasi 1 sampai operasi 3.
*/

var fs = require('fs');

fs.unlink('/file-one', function(err) {
    console.log("file one is deleted");
});

fs.unlink('/file-one', function(err) {
    console.log("file one is deleted");
});

fs.unlink('/file-one', function(err) {
    console.log("file one is deleted");
});
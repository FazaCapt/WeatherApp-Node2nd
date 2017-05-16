//Properti function.
// arguments mengacu pada objek seperti array yang sesuai dengan argumen yang dilewatkan ke sebuah fungsi. 
// Gunakan argumen variabel sederhana sebagai gantinya.

function f(n) {
    g(n - 1);
};

function g(n) {
    console.log('Before: ' + g.arguments[0]);
    if (n > 0) {
        f(n);
    }
    console.log('After: ' + g.arguments[0]);
}

f(5);

console.log('Returned: ' + g.arguments);
//Output: 
// Before: 4
// Before: 3
// Before: 2
// Before: 1
// Before: 0
// After: 0
// After: 1
// After: 2
// After: 3
// After: 4
// Returned: null
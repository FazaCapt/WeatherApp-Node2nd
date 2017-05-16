//Create
var fruits = ['Apple', 'Banana'];

// console.log(fruits.length);
//output: 2
//Penjelasan: Kenapa 2 karena didalam array ada 2 object

//Access (index into) an Array item
var first = fruits[0];
// console.log(first);
//apple

var last = fruits[fruits.length - 1];
//Tampilan berebda dari var first!
// console.log(last);
//banana

// Loop over an Array
fruits.forEach((item, index, array) => {
    console.log(item, index);
});
//Array:
//--
//Apple [ 'Apple', 'Banana' ]
//Banana [ 'Apple', 'Banana' ]
//index: 
// Apple 0
// Banana 1
//Penjelasan: Sepertinya item, index, dan array adalah sebuah property
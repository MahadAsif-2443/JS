// Basic operations 
console.log(2 + 2)    //Add
console.log(2 - 2)    //Substract
console.log(2 * 2)    //multiply 
console.log(2 ** 2)    //power
console.log(2 / 2)    //division
console.log(2 % 2)    //modulos

// Operations perform by most people which are wrong
//to understand that we need to study type conversions in JS study from tc39 JS resource.
console.log("1" + 2)   //gave 12 it just concatenates them
console.log(2 + "1")   //also concates
console.log("1" + 2 + 2)  //also concates
console.log(1 + 2 + "1")  //first two will add and last one concatenates with 3 all because of type conversion in JS it will add non string first and then concatenates with string.

//prefix and postfix operators 
// To know more about these concepts search for "prefix and postfix in javascript mdn"

//postfix operator
let x = 3;         //as in this example it gave value of y is 3 which means in postfix it first returns value and then increment
let y = x++;
console.log(`x:${x}, y:${y}`)

//prefix operator
let a = 8;         //as in this example it gave value of b is 9 which means in prefix it first increments and then returns value
let b = ++a;
console.log(`a:${a}, b:${b}`)



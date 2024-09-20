// In JS we have mainly two datatypes which are primitive and reference/non-primitive.

// Primitive data types are 7 which are (number, bigInt, string, null, undefined, symbol, boolean).
let date = 4;                                        //number
const name = "mahad";                                //string
var large_number = 4244543435678908655567899n;       //bigInt -- we use n in the end of the numbers to
//declare it as big Int
let isLoggedIn = true;                               //boolean
let canada_temperature = null;                       //null mainly its an object
const Id = Symbol('123');                            //symbol
let father_name = undefined;                         //undefined

// type checking of all the primitive data types
console.log(typeof date);                   //type is number
console.log(typeof(name));                  //type is string
console.log(typeof large_number);           //type is bigInt
console.log(typeof (isLoggedIn));           //type is boolean
console.log(typeof canada_temperature);     //type is object
console.log(typeof Id);                     //type is symbol 
console.log(typeof father_name);            //type is undefined

// Reference or non primitive data types.
// mainly these are of three types array, objects, and functions.
const favourite_personalities = ["PROPHET MUHAMMAD PBUH", "HAZRAT KHALID BIN WALEED"]
let entrepreneurs = {
    charisma : "pavel durov",
    tough_oppenent : "jensen huong",
    resilient : "elon musk",
    old_guy : "warren buffet",
    computer_nerd : "mark zuckerberg",
    software_guy : "bill gates"

}
let myjsfunction = function() {

    console.log("hello world");
    
}

// type checking of the reference or non primitive data types.
console.log(typeof favourite_personalities);      //type is nobject
console.log(typeof(entrepreneurs));               //type is object
console.log(typeof myjsfunction);                 //type is function.


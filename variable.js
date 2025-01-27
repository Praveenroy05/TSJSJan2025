// Variable - 
// local variable - {.....}
// global variable
/*

var - We will not be using
let - If the variable can change the value at later point of time
const - Which is a constant in nature

*/
var variable = "JS";
//variable = "TS"
// var 
// 1. scope as global or functional
// 2. Vairable declared using var keyword can be redeclared and can also be reinitialised
// 3. It is not mandatory to initiliase the varaible at the time of declaration
var c;
c = 10;
console.log(c);
var a = 10;
a = 20; // reinitialised
console.log(a);
var b = 20;
var b = 30; // redeclared
var b = 100;
var b = 500;
console.log(b);
function fun() {
    var name = "TS"; // local 
    console.log("Inside function", variable);
    console.log("Inside function", name);
    console.log("Inside function", a);
}
fun();
console.log(variable);
//console.log(name); 
var bookName = "Python"; // global
var d = 10;
if (d > 5) {
    var bookName = "JavaScript";
    console.log(bookName);
}
console.log(bookName); // JavaScript
// let - Value of the variable can be changed at any time
// 1. scope as block level {...}
// 2. Variable declared using let keyword cannot be redeclared but can be reinitialised
// 3. It is not mandatory to initiliase the varaible at the time of declaration
var programName = "Python"; // global
programName = "Java"; // reinitialised
console.log(programName);
var f; //undefined
console.log(f);
f = 20;
console.log(f);
//let f = 10
//let f = 90
var e = 10;
if (e > 5) {
    var js = "JavaScript";
    console.log(programName);
}
console.log(programName);
// 3. const  - Declaration of constant variable
// 1. scope as block level {...}
// 2. Variable declared using const keyword cannot be redeclared and reinitialised
if (true) {
    var py = "Python"; // block level
}
//console.log(py);
var g1 = 80;
g1 = 1000;
//const g = 100


let m = 10 // 
m  = "30"
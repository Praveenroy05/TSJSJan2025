// Functions - 

// In JS & TS functoions are of 2 types
// 1. named function
// 2. anonymous function (Unnamed function)
        // a. anonymous function
        // b. arrow function (ES6 feature) - 2015

// public void name(){}

function namedFunction() {
    console.log("Hello from named function");
}

function namedFunction1(param1){ // arguments
    console.log("hjghjgh");
    return "Hello from named function" + param1;

}



namedFunction1("TS") // parameter


let fun1 = function(){
    console.log("Hello from anonymous function");
}

fun1()


// 1. named function - A function which will be declared along with the name of the function
//Syntax:
/*
function functionName(optional){
 code .....
}
*/
console.log("******************************");
//1. Non-parameterised function

function myFunction(){
    console.log("This is a non-parameterised function");
}

myFunction()

// 2. Parameterised function
function greet(name, age){
    console.log("Hello, " , name, "you are of age", age);
}

greet("John", 30)

//3. parameterised function with return

function add(a,b){
    return a+b
}

const result = add(10,89)
console.log(result)

// 4. non-para
function greet1(){
    return "Welcome to JS"
}

const result1 = greet1()
console.log(result1)


console.log("******************");

// 2. anonymous function - A function that is declared without a name. - Function expression

// Syntax:
/*

const variable = function(){
code ....

}

varaible()

*/

const anonymousFun = function(){
    console.log("Welcome to TS")
}

anonymousFun()

const anonymousFun1 = function(name){
    console.log("Welcome to TS," + name)
}

anonymousFun1("Rahul")

const anonymousFun2 = function(name){
    return "Welcome to TS," + name
}

const anon = anonymousFun2("Rahul")
console.log(anon)

console.log(("***************************"));

// 3. Arrow function (=> fat pipe)

// Syntax:
/*

const variable = (parameter) => {
code ....
}

*/

const arrowFun = (name) => console.log("Welcome to TS," + name);

arrowFun("John");

const arrowFun1 = (a,b) => {
    return a+b
}

const result2 = arrowFun1(5, 10);
console.log(result2);




const arrowFun2 = (a,b) => a+b

const result3 = arrowFun1(20, 10);
console.log(result3);

// Function Constructor
// Syntax: function name(parameters) { code... }

function Person(name, age){
    this.name = name // name = John
    this.age = age // age = 50
    this.method = function(){
        console.log("Name: " + this.name + ", Age: " + this.age);
    }

}

const person1 = new Person("John", 50)
console.log(person1.name);
console.log(person1.age);
person1.method()

person1.name = "Rahul"
person1.method()




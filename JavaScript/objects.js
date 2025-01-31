// Objects - In JS/TS Objects are collections of key-value pairs.They can be created using object literals, constructors, or classes, and can store various data types including other objects and functions.

// ClassName obj = new ClassName(parameter)

// Objects - {key: value} - {name: "TS", function: function {}} - 

//1. Object literals - We use {key:value} - Most frequently
//2. Object Constructor - new Object() -less usable in terms of test automation
//3. Classes - const obj = new ClassName() - more usable in terms of test automation
//4. Constructor function - 
//5. Factory functions - 

// 1. Object literals - {key : value, key2: value2}
// Definition:
//   - A collection of key-value pairs which will be stored inside a curly brases {}. They are the most common way to create objects in JavaScript and TypeScript, allowing for easy and quick definition of properties and methods.

// SYntax:
/*

const obj = 
{
property1 : value1,
property2 : value2,
property3 : value3
method : function(){....}
}

obj.property1
obj.property2
obj.method()

*/

const person = {
    name: "John",
    age: 30,
    address : "Delhi",
    personInfo : function(){
        let city = "New Delhi"
        console.log(this.name, this.age, this.address, city);
    }
}

console.log("line #44" , person);

console.log(person.name);
person.name = "Rahul"
console.log(person.age);
console.log(person.address);    
person.personInfo();



// 2. Object Constructor - new Object()
// Definition:
// Here we create an aobject using new keyword and using a builtin Object constructor (Object)

// Syntax:
/*
const obj = new Object();
obj.property1 = value1;
obj.property2 = value2;
obj.method = function(){....};


obj.property1
obj.property2
obj.method()


*/

const person2 = new Object()
person2.name = "John"
person2.age = 30
person2.info = function() {
    console.log(this.name, this.age);
}

console.log("line -80", person2);
console.log(person2.name);
console.log(person2.age);
person2.info();

// 3. Constructor Function
// Definition:
// Here we create an object using a constructor function. We can pass arguments to the constructor function to initialize the object properties.

// Syntax:
/*


function ConstructorFucntionName(arg1, arg2.....){
    this.property1 = arg1;
    this.property2 = arg2;
    this.method = function(){....};
}

const obj = new ConstructorFucntionName(arg1, arg2.....);

obj.property1
obj.property2
obj.method()

*/

function Car(make ,model, year){
    this.make = make // make = BMW
    this.model = model // model= "i7"
    this.year = year // year = 2024
    this.method = function(){
        console.log(this.make, this.model, this.year);
    }
}

const car = new Car("BMW", "i7", 2024)
console.log("line - 117", car);

console.log(car.make);
console.log(car.model);
console.log(car.year);
car.method();

const car1 = new Car("Tata", "Curve", 2025)
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
car1.method();



// Factory Functions
// Definition:
// Factory functions are similar to constructor functions but they do not use the 'new' keyword to creat. They return an object and can be used to create multiple objects with different properties.

function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        method: function() {
            console.log(this.make, this.model, this.year);
        }
    };
}

const car2 = createCar("Honda", "Civic", 2023);
console.log("line-148", car2);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
car2.method();

const car3 = createCar("Audi", "Q5", 2024);
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
car3.method();

// Class 






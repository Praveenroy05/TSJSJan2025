//loop - Loop will execute the same block {} of code multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("*****************");



// for loop
// while loop
// do while loop
// for .. of loop
// for .. in loop
// break
// continue

// for loop - When we know the number of times that we have to execute the loop

// Syntax
/*

for (initialization; condition; increment/decrement) {
// code to be executed
}

initialization - initialize the variable to start the loop. Ex: - let i=0
condition - condition to check whether the loop should continue or not. Ex: - i<5
increment/decrement - increment or decrement the variable after each iteration. Ex: - i++


*/
// 1....5
for(let i=1; i<=5; i++){  // i++ = i+1 1+1 =2+1 =3+1 =4+1 =5+1=6
    console.log(i) // 1 2 3 4 5 
}

for(let i=5; i>0; i--){  // 
    console.log(i) // 5 4 3 2 1
}

console.log("********************");
// while loop - When we do not know the home many number of times we have to execute the loop
// Syntax
/*

initialization;
while (condition) {
// code to be executed
increment/decrement;
}


*/

// 1...5
let i=1
while(i<=0){
    console.log(i)
    i++ // increment
}

console.log("******************");

// do while loop
// A do-while is similar to the while loop except that it gurantees the loop will run at least once before the condition is checked.

// Syntax
/*

initialization
do {
// code to be executed
increment/decrement;
} while (condition);


*/

let j =1
do {
    console.log(j)
    j++ // increment
} while (j<=0) // condition

console.log("**************************");
// for .. of loop - Will be used to iterate over the objects like arrays, string etc
// Syntax

let array = [10,20,30,40,"50"] //
for(let i=0; i<array.length; i++){
    console.log(array[i])
}
//array[0]
/*

for (variable of iterable) {
// code to be executed
}

*/

let string = "Hello"

for(let i of string){
    console.log(i)
}
console.log("**********************************");
// for ...in loop - Is used to iterate over the properties of any object in JS & TS

// Syntax:
/*

for (variable in object) {
    // code to be executed
}

*/

// Test obj = new Test()
// obj.methodName(params);

const person = {name : "JS", age:30, city : "NY"} // {"key":value}

console.log(person.name)
console.log(person["age"])

for (let key in person){
    console.log(key, person[key]);
}







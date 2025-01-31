// Data types - Which defines what kind of data a varaible is storing

let str = "true" // boolean

// num = [10, 20, 30, "string", 'test', true, undefined] - array

// 2 types of data types
// 1. Primitive data types - only one value
/*
1. number - Represent both integer (10,45) and floating point number (10.90, 435435.3454534)
2. string
3. boolean
4. null
5. undefined


6. any - typescript



*/

// 1. number
let num = 10.90; // typeof
console.log(typeof num);

let num1 = 100
console.log(typeof num1);

let num2 = -1899
console.log(typeof num2);

// 2. string - combination of characters - Example string

/*
1. Single quote ('') - String literal
2. Double quote ("") - String literal
3. backtick(``) - String template - ${}
    1. When we try to use a variable inside a string variable - Parametrisation of test case in Playwright
    2. To define the multiple line string
    this is
    a multi 
    line string

*/


let singleQuote = 'JavaScript' // 
console.log(singleQuote);

let doubleQuote = "JavaScript" //
console.log(doubleQuote);

let backtick = `This is a string`
console.log(backtick);

let name1 = "JS"
let backtick1 = `Welcome, ${name1} `
console.log(backtick1);

let backtick2 = ` this is
    a multi 
    line string`
    console.log(backtick2);

//3. boolean - true or false

let isAdmin = true
let isNumber = false

// 4. null  - no value
let user = null
console.log(user);
console.log(typeof user);

//5. undefined
let user1
console.log(user1);
console.log(typeof user1);









// 2. Non-primitive data types - object (arrays, string, objects) - 
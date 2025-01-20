// Statement or condition
// Statement or condition allow is to execute different block {} of code based on different condition.

// if statement
// if else statement
// if else if statement
// switch statement

// if statement - If statement is used to execute the block {} of code if the specified condition is true

/*
Syntax: 

if (condition) {
    // code to be executed if condition is true
}

*/

if(10>20){
    console.log("10 is greater than 5");
}

// if else 
// if else statement is used to execute the if block {} of code if the specified condition is true and
// if the condition is false then it will execute the else block {} of code.

// SYntax:
/*

if (condition) {
code to be executed if condition is true
} 
else {
  code to be executed if condition is false
}

*/

if(0>10){
    console.log("0 is greater than 10");
}
else{
    console.log("0 is not greater than 10");
}

// if else if statement
// if else if statement is used to check multiple conditions and execute the block {} of code based on
// the condition that is true.

// Syntax:-
/*

if (condition1) 
{
code to be executed if condition1 is true
} 
else if (condition2) 
{
code to be executed if condition1 is false and condition2 is true
}
else if (condition3) 
{
code to be executed if condition1 and condition2 are false and condition3 is true
}
else 
{
code to be executed if all conditions are false
}

*/

let browser = "edge"

if(browser === "chrome")
    {
    console.log("Browser is chrome");
    }
else if(browser === "firefox")
    {
    console.log("Browser is firefox");
    }
else if(browser === "Safari")
    {
    console.log("Browser is Safari");
    }
else{
    console.log("Browser is not supported");
    }

console.log("*******************************");

// switch statement
// switch statement is used to check the value of a variable and execute the block of code based on
// the value of the variable.
// Syntax:-


/*

switch (expression)
{
case value1:
    code to be executed if expression is equal to value1
    break;
case value2:
    code to be executed if expression is equal to value2
    break;
case value3:
    code to be executed if expression is equal to value3
    break;
default:
    code to be executed if expression is not equal to any of the above values
    }

*/
let browser1 = "chrome"


switch (browser1) {
    case "chrome":
        console.log("Browser is chrome");
        break;
    case "firefox":
        console.log("Browser is firefox");
        break;
    case "safari":
        console.log("Browser is Safari");
        break;
    default:
        console.log("Browser is not supported");
        break;
}




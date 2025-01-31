// Operators - It is a special symbol or keyword which used to perform operation on values or variables.
// 1. Arithmetic Operators
// 2. Comparison Operators (10>5)
// 3. Logical Operators (10<6) && (10>5)
// 4. Assignment Operators (x=10) =


// Arithmetic Operators: - AO are used to perform mathematical operations. Like addition, subtraction, ....
// 1. Addition (+): Add 2 or more data

let num3 = 10
let num4 = 5

console.log(num3+num4); 

let str1 = "Hello "
let str2 = "World"
console.log(str1+str2);

// Subtraction (-)
console.log(num3-num4);

// Multiplication (*)
console.log(num3*num4);

// Division (/)
console.log(num3/num4); // 30/50 - 30 

// Modulus (%) - Remainder of the division

let num5 = 11
let num6 = 4
console.log(num5/num6); // 2.75
console.log(num5%num6); // 3
console.log("*********************");
// ++ (Increment Operators) +1

// 1. Pre Increment: (++variable) - First the value will be incremented and then the action will be performed.
//++ = +1 // 10++ = 10+1


let num7 = 10 
console.log("Pre Increment", ++num7);  // ++10 = 10+1 // 11



// 2. Post Increment: (variable++) - First the action will be performed and then value will be incremented

let num8 =5
console.log("Post Increment", num8++); // 5
console.log(num8); // 5++ =  5+1 = 6





// -- (Decrement Operators ) -1

// 1. Pre Decrement: (--variable) - First the value will be decrements and then the action will be performed.
// x-- = x-1 // 10-- = 10-1 = 9
let num9 = 7
console.log("Pre Decrement", --num9); // 6


// 2. Post Decrement: (variable--) - First the action will be performed and then value will be decremented
let num10 = 8
console.log("Post Decrement", num10--); // 8
console.log(num10); // 7

console.log("*****************************");
// Comparison Operators - Compares the value and return the results as a boolean (true of false)



// 1. Equal to (==) - Returns true if both values are equal - Both of the values are same or not
// 2. Not Equal to (!=) - Returns true if both values are not equal
// 3. Greater than (>) - Returns true if left operand is greater than right operand
// 4. Greater than or Equal to (>=) - Returns true if left operand is greater
// 5. Less than (<) - Returns true if left operand is less than right operand
// 6. Less than or Equal to (<=) - Returns true if left operand is less

// 7. Strict Equality (===)
// 8. Strict Inequality (!==)

let num11 = 10
let num12 = 10
console.log("Equal = ", num11 == num12); 
console.log("Not Equal !=,", num11 != num12);
console.log("Greter than >", num11 > num12);
console.log("Greater than equal >=", num11 >= num12);
console.log("Less than <", num11 < num12);
console.log("Less than equal to <=", num11 <= num12);
console.log("*********************");
// Equal to == - values are same or not
let num13 = 15  // number
let num14 = "15" // string
console.log("Equal to ==", num13 == num14); // true

// Strict Equal to === - It will compare a values are same or not by checking the data type of variables as well.
console.log("Strict Equal to ===", num13 === num14); // false
console.log("Strict Inequality !=", num13 !== num14); // true


// Logical Operators - Evaluates a boolean (true or false) expression or conditions (10>6)
// 1. AND (&&) - It will return true if both the conditions are true
// 2. OR (||) - It will return true if at least one of the conditions
// 3. NOT (!) - It will return true if the condition is false and vice versa


// if(count >10 && Element.isvisible()){
//     console.log("Both conditions are true");
// }else{
//     console.log("Both conditions are false");
// }


console.log("AND &&",(10>11) && (7>6));
console.log("OR ||",(10>9) || (5>6));
console.log("NOT !",!(20>15)); // !true = false

// Assigment = It use to assign the value to a variable
// let num = 10;


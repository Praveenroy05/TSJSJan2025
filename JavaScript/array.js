// Array - [1, 2, 3, 4, 5, "String", "JS", true, null, undefined]

// int[] array = new int[5];

const array = [10, 20, 30, 40, 50, "String", "JS", true, null, undefined, "pink", "Apple"] 

// [0:10, 1:20, 2:30, 3:40, 4:50, 5:"String", 6:"JS", 7:true, 8: null, 9: undfined]

console.log(array[0]) // to get eh first element from an array

// There are 2 ways in which we can create an array in JS/TS
// 1. Array Literal

let emptyArray = []
console.log(emptyArray)
emptyArray[0] =10
emptyArray[1] = 20
console.log(emptyArray);


console.log(Array.isArray(array))



// 2. Array Constructor
// Syntax:
// let array = new Array(element0, element1, ..., elementN);

const array1 = new Array(10,13,"JS", true, null, undefined)
console.log(Array.isArray(array1))

let array2 = [12,35,6,7,8]
let stringArray = ["JS", "TS", "Python"]

// Methods in array 

console.log("**********************************");
let array3 = ["JS","TS","Python", "Java", 10, 20, 30, true]

//length - it is a proerty that returns the number of elements in the array
// syntax:
// arrayname.length
console.log("Length of an array",array3.length); // 
// console.log(array3[0])
// console.log(array3[1])
// console.log(array3[2])
// console.log(array3[3])

for(let i=0; i<array3.length; i++){
    console.log(array3[i])
}

for(let ele of array3){
    console.log(ele)
}

console.log("********Methods in Array************");

// push(value); // Adds value to the end of the array
// Syntax:
//arrayname.push(element)
console.log(array3);
array3.push(40, "Red")
console.log("Push array", array3);

// pop() - removes the last element from the array
// Syntax:
// arrayname.pop()

array3.pop()
console.log("Pop array", array3);

// unshift(value); // Adds value to the beginning of the array
// Syntax:
// arrayname.unshift(element)
array3.unshift("Apple", 100);
console.log("Unshift array", array3);

// shift() - removes the first element from the array
// Syntax:
// arrayname.shift()

array3.shift();
console.log("Shift array", array3);


// slice(startindex, endIndex) // startindex to the 
// syntax
// arrayname.slice(startindex, endIndex) // slice(0,5) // 0....4
console.log("Slice array", array3.slice(4,9));


// splice(startIndex, deleteCount, ele1, ele2, ele3, ele4)

// startIndex - The position where you want to add the elements or remove existing elements from the array
// deleteCount - The number of elements you want to remove from the array starting from startIndex
// ele1, ele2, ele3, ele4 - The elements you want to add to

//syntax
// arrayname.splice(startIndex, howmany, ele1, ele2, ele3...)

let array4 = [10,23,45,"Red", "pink", "apple","green", "blue", true]
console.log("Original Arrya", array4);

//console.log("Splice array", array4.splice(2, 2, "JS", 1000, 78))
console.log("Splice array", array4.splice(2, 0, "JS", 1000, 78))

console.log("Splice Array", array4);

// toString() - Converts the array into string
// syntax
// arrayname.toString()
console.log("ToString array", array4.toString());

// indexOf(element) // Returns the first index at which a given element can be found in the array, or -1 if it is not present)
// syntax
// arrayname.indexOf(element)
let array5 = [10,20,30,40,20,30,"JS", "TS"]
console.log("Indexof array", array5.indexOf(100));

// foreach(func), map(func), filter(func), reduce(func),  some(fun), every(fun)

let array6 = [1, 2, 3, 4, 5];
// foreach(fun)

// syntax
// arrayname.foreach(function(element, index, array))
// element - The current element being processed in the array - 1 2 3
// index(optional) - The index of the current element being processed in the array - 0 1 2
// array(optional) - The array the current element belongs to - [1, 2, 3,


for(let i=0; i<array6.length; i++){
    console.log(array6[i], i);
}

array6.forEach(function(currentValue){
    console.log(currentValue)
})

// map(fun) - Create a new array with the result of the calling function on every element of an array
//return the exactly similar number of element that we have in original array

// syntax:-
// arrayname.map(function(element, index, array) { return element; })
// element - The current element being processed in the array - 1 2 3
// index(optional) - The index of the current element being processed in the array - 0 1 2
// array(optional) - The array the current element belongs to - [1, 2, 3,

for(let i=0; i<array6.length; i++){
    console.log(array6[i] * array6[i]);
}

const mapArray = array6.map(function(element){ //1 2
    return element * element // 1*1 2*2 3*3 ....
})
console.log(mapArray);


// filter(func) - Create a new array with allthe elements that passes/satifies the function that we provide as a parameter.
// Either return the exactly same number of element that we have in original array or the less than the number of element

//Syntax: 
//arrayname.filter(function(element, index, array){
//........
//})
// element - The current element being processed in the array - 1 2 3
// index(optional) - The index of the current element being processed in the array - 0 1 2
// array(optional) - The array the current element belongs to - [1, 2, 3,

const filterArray = array6.filter(function(element){
    return element % 2 ==0
})
console.log(filterArray)

// reduce (fun) - Function will apply on every element of an array and return theresult as a single element.

// syntax:
/*
arrayname.reduce(function(accumator, element, index, array){

}, initialValue)
[1,2,3,4,5]
*/

// accumator  - the accumated value that we got from the previous iteration

let sum = 1 // 0
for(let i=0; i<array6.length; i++){
    sum = sum * array6[i]  // sum = 0+1 = 1 // sum = 1+2 
}
console.log(sum);

const reduce = array6.reduce(function(total, element){
    return total * element
})

console.log(reduce);

// some(fun)  - Checks if at least one element in the array passes the test implemented by the provided function.
// Syntax: - arrayname.some(function(element, index, array) {
  // return true or false based on the condition
//})

const someresult = array6.some(function(element) {
  return element > 5;
})
console.log(someresult);

 
//every(fun) - Checks if all elements in the array pass the test implemented by the provided function.

// Syntax: - arrayname.every(function(element, index, array) {
  // return true or false based on the condition
//})

const everyResult = array6.every(function(element) {
    return element %2 ==0;
  })
  console.log(everyResult);



const carclass = new CarClass('Toyota', 2020, 'White')
carclass.stop()











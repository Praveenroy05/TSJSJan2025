// string  - Sequence of characters. Hello

// 1. Using single quote  - String literals - 'Hello'
// 2. Using double quote - String literals - "Hello"
// 3. Using backtick - Template literals - `Hello`
// 4. String constructor - new String("Hello")

let singleQuote = 'JavaScript' // 
console.log(singleQuote);

let doubleQuote = "JavaScript" //
console.log(doubleQuote);

let backtick = `This is a string`
console.log(backtick);

let name1 = "JS"
let backtick1 = `Welcome, ${name1} `
console.log(backtick1);

let string1 = new String("This is a string constructor")
console.log(string1);

// 1. length - Returns the number of characters in string
// syntax
// stringname.length

const str = "Hello Javascript" // 0-15
console.log(str.length);

// 2. charAt(index)
// Returns the character at the specified index in a string.
// syntax
// stringname.charAt(index)
console.log(str.charAt(6));

// 3. concat(string1....)
// Concatenates the string arguments to the left of the method with the string arguments to the right
// of the method and returns a new string.
// syntax
// stringname.concat(string1, string2, string3)
console.log(str.concat(" is awesome", " ", "Language"));

// 4. includes(searchString) - 
// Returns a boolean indicating whether one string may be found within another string.
// syntax
// stringname.includes(searchString)
const includesResult = (str.includes("Typescript"));
console.log(includesResult);
console.log(str.includes("J"))

// 5. startsWith(searchString)
// Returns a boolean indicating whether the calling string starts with the characters of the argument string.
// syntax
// stringname.startsWith(searchString)

const str1 = "This is a Javascript and Playwright"
console.log(str1.startsWith("T"));

// 6. endsWith(searchString)
// Returns a boolean indicating whether the calling string ends with the characters of the argument string.
// syntax
// stringname.endsWith(searchString)
console.log(str1.endsWith("t"));


// 7. indexOf(character, optional)
// Returns the index within the string of the first occurrence of the specified value, or -1 if
// it is not present.
// syntax
// stringname.indexOf(character or string)
console.log(str1.indexOf("and"));

// 8. lastIndexOf(character, optional)
// Returns the index within the string of the last occurrence of the specified value, or -1 if
// it is not present.
// syntax
// stringname.lastIndexOf(character or string)
console.log(str1.lastIndexOf("is"));

//9. replace(searchValue, newValue)
// Replaces some or all matches of a pattern in a string.
// syntax
// stringname.replace(searchValue, newValue)
console.log(str1.replace("Javascript", "Typescript"));

//10. slice(startIndex, endIndex)
// Returns the characters in a string between "startIndex" and "endIndex" (exclusive)
// syntax
// stringname.slice(startIndex, endIndex)
console.log(str1.slice(0, 5));

// 11. split(separator)
// Splits a string into an array where each word is an array item.
// syntax
// stringname.split(separator)

const str2 = "Hello World World1 World2 World3" // [Hello, orld, orld1, orld2, orld3]
console.log(str2.split(" "));

// 12. subString(startIndex, EndIndex) - 
// Returns the characters in a string between "startIndex" and "endIndex" (exclusive)
// syntax
// stringname.substring(startIndex, endIndex)
console.log(str2.substring(0, 5));

// 13. toLowerCase() - 
// Converts a string to lower case.
// syntax
// stringname.toLowerCase()

let str3 = "HELLO JAVASCRIPT"
console.log(str3);
console.log(str3.toLowerCase());

// 14. toUpperCase()
// Converts a string to upper case.
// syntax
// stringname.toUpperCase()
let str4 = "hello Typescript"
console.log(str4);
console.log(str4.toUpperCase());

//15. trim() 
// Removes whitespace from the beginning and end of a string.
// syntax
// stringname.trim()
let str5 = "   Hello Typescript   "
console.log(str5);
console.log(str5.trim());

//16. trimStart(), trimEnd()
// Removes whitespace from the beginning of a string.
// syntax
// stringname.trimStart()
console.log(str5.trimStart());
// Removes whitespace from the end of a string.
console.log(str5.trimEnd());




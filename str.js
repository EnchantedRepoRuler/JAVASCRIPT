// let str = "Hello";
// console.log(str);
// console.log(str.length);

//=====================================================
//template literals
// let person = {
//     noun : "Ram",
//     pronoun : "He/Him",
// };

// let op = `${person.noun} has pronouns ${person.pronoun}. His age is ${10+10+5}`//dollar wali cheeze hi string interpolation hai!
// console.log(op);

// //escape characters
// console.log("example of \n next line");
// console.log("this is example \t tab space");
//methods ==> built in functions that can manipulate the strings
// let str = " Hello World ";
// let str1 = "kya chutiyapa hai";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(3,6));
// console.log(str.concat(str1));
// console.log(str1.replace("chutiyapa", "nautanki"));
// console.log(str.charAt(4));
//===========================================================
let fullName = prompt("Enter your name:");
let userName = "@"+fullName+fullName.length;
console.log(userName);

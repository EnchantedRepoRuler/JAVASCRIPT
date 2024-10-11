// let str = "Hello";
// console.log(str);
// console.log(str.length);

//=====================================================
//template literals
let person = {
    noun : "Ram",
    pronoun : "He/Him",
};

let op = `${person.noun} has pronouns ${person.pronoun}. His age is ${10+10+5}`//dollar wali cheeze hi string interpolation hai!
console.log(op);

//escape characters
console.log("example of \n next line");
console.log("this is example \t tab space");

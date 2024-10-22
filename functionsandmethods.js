// function myFunction(){
//     console.log("Hello World!");
//     console.log("We are learning JS ;-)");
// }

// myFunction();

// function newFunction(msg){
//     console.log(msg);
// }

// newFunction("namaste duniya!");
//function to calculate sum of two number

// function sum(a, b){
//     let s = a+b;
//     return s;

// }

// let val = sum(5,6);
// console.log(val);


//arrow function
//part of modern js
//we can create a function and store it in a variable
// const arrowSum = (a,b) => {
//     console.log(a+b);
//     return a + b;//can return also
// };





//Question 1
function countVowel = (str) =>{
    let count = 0;
    for(let i of str){
        if(i=='a' || i=='e' || i=='i' || i == 'o' || i == 'u' || i == 'A' || i=='E' || i=='I' || i == 'O' || i == 'U'){
            count += 1;
            return count;
        }
    }
};


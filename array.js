// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);
//typeof array == object, instead of key we have index
// let i = 0;
// for( let i = 0; i<marks.length; i++){
//     console.log(marks[i]);
// }

//question 1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// console.log(sum);

// let avg = sum / marks.length;
// console.log(avg);

//question 2
// let price = [250, 645, 300, 900, 50];
// for(let i =0; i<price.length; i++){
//     let offer = price[i]/10;
//     price[i] = price[i]-offer;
// }
// console.log(price);

//array methods
// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log("array list before using push methods: ", foodItems);

// foodItems.push("chips", "paneer", "burger");
// console.log("array list after using push method: ", foodItems);

// foodItems.pop();
// console.log("array list after using pop method: ", foodItems);

// console.log("array list after using tostring method: ", foodItems.toString());

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// heroes.unshift("shaktiman");//like push
// console.log(heroes);

// heroes.shift();//delete from start and return
// console.log(heroes);

// console.log(heroes.slice(2, 4));//slice(staridx, endidx)

// console.log(marvelHeroes.splice(2,1,"antman"));//change the original array splice(startindex, kitne element delete karne hai, new elements add karne hai)

//question 
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// console.log(companies);

let newComapanies = companies.splice(2,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);
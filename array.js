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
let price = [250, 645, 300, 900, 50];
for(let i =0; i<price.length; i++){
    let offer = price[i]/10;
    price[i] = price[i]-offer;
}
console.log(price);
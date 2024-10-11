let input = prompt("Enter the score:");
if(input<=100 && input>=80){
    console.log("A");
}
else if(input<=89 && input>=70){
    console.log("B");
}
else if(input<=69 && input>=60){
    console.log("C");
}
else if(input<=59 && input>=50){
    console.log("D");
}
else if(input<=49 && input>=0){
    console.log("F");
}
else{
    console.log("invalid");
}


let age= require("prompt-sync")();
// Question 1
/*
if(age>=10 && age<=20){
  console.log("Age is between 10 and 20");
}else{
  console.log( "Age is not between 10 and 20");
}
*/
// Question 2
/*
switch(age){
  case 13:
    console.log("Age is 13");
    break;
  case 14:
    console.log("Age is 14");
    break;
  case 15:
    console.log("Age is 15");
    break;
  case 16:
    console.log("Age is 16");
    break;
  default:
    console.log("Age is not between 13 and 16");
}
*/
// Question 3

let num1 = 5;
/*
if(num1%2 == 0){
  console.log("Number is divisible by 2");
}else {
  console.log( "Number is not divisible by 2");
}
*/

// Question 4
/*
if(num1%2==0 && num1%3 == 0){
  console.log( "Number is divisible by 2 and 3");
}else if(num1%2==0){
  console.log( "Number is divisible by 2");
}else if(num1%3==0){
  console.log( "Number is divisible by 3");
}else{
  console.log( "Number is not divisible by 2 and 3");
}
*/

// Question 5
console.log(age>18 ? "You can drive" : "You cannot drive");
// Quetion 1
const prompt = require('prompt-sync')();
// const arr = [1,2,3,4,5,6,7,8,9,10];

// let num = prompt("Enter a number: ");
// num = Number.parseInt(num);
// arr.push(num)
// console.log(arr);

// Question 2

// let num ;
// do{
//   num = prompt("Enter a number: ");
//   num = Number.parseInt(num);
//   arr.push(num);
// }while(num != 0);
// console.log(arr)

// Question 3

// let arr2 = [1,20,3,4,50,6,70];
// const filteredArray = arr2.filter((value) => value%10 == 0);
// console.log(`Filter out the elements divisible by 10 
// are: ${filteredArray}`);

// Question 4

// const mappedArray = arr.map((value) => value*value);
// console.log(`Squre of array elements : ${mappedArray}`);

// Question 5
// let array =[1,2,3,4,5];
// const factorial = array.reduce((x1,x2) => x1*x2);
// console.log(`Factorial of array elements : ${factorial}`);

// Task ====>

let randomNumber = Math.floor(Math.random() * 100) + 1;

let num;
let count = 0;
while(num != randomNumber){
  num = prompt("Enter a number: ");
  num = Number.parseInt(num);
  count++;
  if(num > randomNumber){
    console.log("Number is greater than random number");
  }
  else if(num < randomNumber){
    console.log("Number is less than random number");
  }
}
console.log(`You guessed the correct number in ${count} attempts and your score is ${100-count}`);
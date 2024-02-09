// Question 1 & Question 2 , 3



// let repaeat = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// }

// while(repaeat){
//   let age = prompt("Enter your age: ");
//   age = Number.parseInt(age);
//   if(age < 0){
//     console.error("Please enter a valid age");
//     break;
//   }
//   if(canDrive(age)){
//     alert("You can drive");
//   }else{
//     alert("You cannot drive");
//   }
//   repaeat = confirm("Do you want to play again?");
// }

// Question 4

// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);

// if(age > 4){
//   location.href="https://google.com"
// }

// Question 5
// let color = prompt("Enter the page background color: ");
// document.body.style.background = color;


// Task 2  Snake , Water , Gun Game
let user = prompt("Enter S, W or G");
user.toUpperCase();
let bot = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][bot];

const match = (cpu, user) =>{
  if(cpu === user){
    return "Nobody";
  }else if(cpu === "S" && user === "W"){
    return "cpu";
  }else if(cpu === "S" && user === "G"){
    return "user";
  }else if(cpu === "W" && user === "S"){
    return "user";
  }else if(cpu === "W" && user === "G"){
    return "cpu";
  }else if(cpu === "G" && user === "S"){
    return "cpu";
  }else if(cpu === "G" && user === "W"){
    return "user";
  }
}

 const result = match(cpu, user);
document.firstElementChild.textContent= (`Cpu is ${cpu} user is ${user} winner is ${result}`)
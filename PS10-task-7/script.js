// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   getInfo(){
//     console.log( `Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// class Leo extends Animal{
//   constructor(name, age, color){
//     super(name, age);
//     this.color = color;
//   }

//   getColor(){
//     super.getInfo();
//     console.log(`Color of ${this.name} is: ${this.color}`);
//   }
// }
// // const ani = new Animal('Tom', 10);
// const leo = new Leo('Leo', 10, 'white');
// leo.getColor();


// class Employee{
//   constructor(name, salary){
//     console.log(`employee name is ${name} and salary is ${salary}`)
//     this.name = name;
//     this.salary = salary;
//   }
//   login(){
//     console.log(`Employee has logged in`);
//   }
//   logout(){
//     console.log(`Employee has logged out`);
//   }
//   requestLeaves(leaves){
//     console.log(`Employee has requested ${leaves} leaves - Auto approved`);
//   }
// }

// class Programmer extends Employee{
//   requestCoffee(x){
//     console.log(`Employee has requested ${x} coffees`);
//   }
//   requestLeaves(leaves){
//     super.requestLeaves(leaves);
//     console.log("One extra is granted");
//     console.log(`Employee has requested ${leaves + 1} leaves (One extra)`);
//   }
// }

// let e = new Programmer("Mahesh", 20000);
// e.login();
// e.requestLeaves(3);


//           STATIC METHOD IN CLASS

// class Animal{
//   constructor(name){
//     this.name = Animal.capitalize(name);
//   }
//   walk(){
//     alert("Animal " + this.name + " is walking");
//   }
//   static capitalize(name){
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//   }
// }

// let a = new Animal("jack");
// a.walk();

// Q1

class Complex{
    constructor(real , imaginary){
      this.real = real;
      this.imaginary = imaginary;
    }
  
    add(num){
      this.real = this.real + num.real;
      this.imaginary= this.imaginary + num.imaginary;
      // return new Complex(r, i);
    }
  }
  
  let a = new Complex(2, 4);
  let b = new Complex(6, 2);
  a.add(b);
  console.log(`${a.real} + ${a.imaginary}i`)
  
  //Q2
  
  class Human{
    constructor(name, favfood){
      this.name = name;
      this.favfood = favfood;
    }
    dance(){
      console.log(`${this.name} is dancing`);
    }
  }
  
  class Student extends Human{
    dance(){
      console.log(`${this.name} is Student and he is dancing`);
    }
  }
  
  let std = new Student("Mahesh", "Pizza");
  std.dance();
  
  
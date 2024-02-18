let btn = document.getElementById("btn");

btn.addEventListener("click",doIt);

function doIt(){
  window.location= "https://www.youtube.com";
}

//Q4 : setInterval
let heading=document.getElementById("h3");

let repeat = setInterval(function() {
  let num = Math.floor(Math.random() * 10);
  console.log(num);
  heading.innerHTML = num;
}, 1000);

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
  repeat = setInterval(function() {
    let num = Math.floor(Math.random() * 10);
    console.log(num);
    heading.innerHTML = num;
  }, 1000);
});

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
  clearInterval(repeat);
});

//Task 4
let timers = document.getElementById("time");

let clock = setInterval(function() {
  let current_Time = new Date();
  let hours = current_Time.getHours();
  let minutes = current_Time.getMinutes();
  let seconds = current_Time.getSeconds();
  if(hours<10){
    hours = "0" + hours;
  }
  if(minutes<10){
    minutes = "0" + minutes;
  }
  if(seconds<10){
    seconds = "0" + seconds;
  }
  
  timers.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);

let btn3 = document.getElementById("StartClock");
btn3.addEventListener("click", function(){
  clock = setInterval(function(){
    let current_Time = new Date();
    let hours = current_Time.getHours();
    let minutes = current_Time.getMinutes();
    let seconds = current_Time.getSeconds();

    if(hours<10){
      hours = "0" + hours;
    }
    if(minutes<10){
      minutes = "0" + minutes;
    }
    if(seconds<10){
      seconds = "0" + seconds;
    }
    
    timers.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  }, 1000, 1000);;
})

let btn4 = document.getElementById("StopClock");
btn4.addEventListener("click", function(){
  clearInterval(clock);
});
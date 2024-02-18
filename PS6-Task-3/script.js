// Q1
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "cyan";

// Q2
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "Green";

// Q3
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "blue";
})

// Task

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you call fake spaghetti? An impasta!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Why did the coffee file a police report? It got mugged!",
  "I'm reading a book about mazes. I got lost in it.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I used to play piano by ear, but now I use my hands.",
  "What do you call fake noodle? An impasta!",
  "I'm on a whiskey diet. I've lost three days already.",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "I told my computer I needed a break and now it won't stop sending me vacation ads.",
  "What did the grape do when it got stepped on? Nothing, it just let out a little wine.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere.",
  "I used to play piano by ear, but now I use my hands.",
  "I used to be a baker, but I couldn't make enough dough.",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "I'm reading a book on the history of glue. I just can't seem to put it down.",
  "I'm reading a book about teleportation. It's bound to get me somewhere."
];

let buttonClick = document.getElementById("btn");
buttonClick.addEventListener("click", changeText)

function changeText(){
const randomJoke = Math.floor(Math.random() * jokes.length-1);
console.log(randomJoke);
joke.innerHTML = jokes[randomJoke];
}
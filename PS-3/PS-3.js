// Quetion 1
let name = "Renocrew\"";
console.log(name.length);

// Quetion 2
let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "fox";
console.log(`The word "${word}"" ${sentence.includes(word) ? "is in the sentence" : "is not in the sentence"}`);

// Quetion 3
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("frog."));

// Quetion 4

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// Quetion 5
let str = "Please give Rs 5000";
console.log(str.slice(15));

// Quetion 6
let str1 = "Renocrew";
let result = ""
for(let i=0 ; i<str1.length; i++){
  if(i==3){
    result += "R";
  }
  else{
    result += str1[i];
  }
}
console.log(result);
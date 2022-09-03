// loops

const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let indexInput = 0; indexInput < input.length; indexInput++) {
  //console.log(`input index is ${idexInput}`);
  if(input[indexInput] === "e") {
    resultArray.push(input[indexInput]);
  }
  if(input[indexInput] === "u") {
    resultArray.push(input[indexInput]);
  }
  
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log(`vowel Index is ${vowelIndex}`);
    if (input[indexInput] === vowels[vowelIndex]) {
      //console.log(input[indexInput]);
      resultArray.push(input[indexInput]);
    }
  }    
}
const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
// my "age"😉
const myAge = 27;
// my early dog years age
let earlyYears = 2;
earlyYears *= 10.5;
// subracting 2 years from my age
let laterYears = myAge - 2;
// calculating the number of dog years accounted for me by my later years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
// my name saves in lower case
let myName = "Nadizzle".toLowerCase();

console.log(myName);
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

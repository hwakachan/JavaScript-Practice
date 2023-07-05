'use strict'

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio';
// const private = 534;

*/
/*
function logger() {
  console.log('My name is Hikaru')
}

//calling / runnning / invoking function 
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuuice = fruitProcessor(2, 4);
console.log(appleOrangeJuuice);
*/

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;

}

const age1 = calcAge1(1997);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearsUntilRetirement(1991));

const bill = 40;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, 
and the final value ${bill + tip}`)

const brianBank = { 
    pennies: 542,
    dimes: 54,
    nickels: 245,
    quarters: 356
}

const bankCalculator = (bankObj) => {

let dollarAmount = 0

if (bankObj.pennies) {
const pennies = bankObj.pennies
dollarAmount += pennies * .01
}

if (bankObj.dimes) {
const dimes = bankObj.dimes
dollarAmount += dimes * .10  
}

if (bankObj.nickels) {
const nickels = bankObj.nickels
dollarAmount += nickels * .05  
}

if (bankObj.quarters) {
const quarters = bankObj.quarters
dollarAmount += quarters * .25  
}

return `$${dollarAmount.toFixed(2)}`
}

console.log("Brian's piggy bank:", bankCalculator(brianBank))


const jessicaBank = { 
pennies: 342,
dimes: 54,
nickels: 245,
quarters: 1156
}

console.log("Jessica's piggy bank:", bankCalculator(jessicaBank))



// const totalPennies = piggyBank.pennies / 100;
// console.log(totalPennies)
// const totalDimes = piggyBank.dimes / 10;
// console.log(totalDimes)
// const totalNickels = piggyBank.nickels / 20;
// console.log(totalNickels)
// const totalQuarters = piggyBank.quarters / 4;
// console.log(totalQuarters)

// let dollarAmount = totalPennies + totalDimes + totalNickels + totalQuarters



// console.log(dollarAmount)


// const dollarAmount = 0.10
// const piggyBank = {}

// // Your magic code here

// console.log(piggyBank)




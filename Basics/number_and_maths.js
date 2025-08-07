const score = 400
console.log(score) // 400

const balance = new Number(69)
console.log(balance) // [Number : 69]

console.log(balance.toString().length) // 2
console.log(balance.toFixed(2)) // 69.00

const hundreds = 69000000
console.log(hundreds.toLocaleString('en-IN'))

// +++ Maths ++++

console.log(Math.abs(-4)) // 4

console.log(Math.random()) // gives value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


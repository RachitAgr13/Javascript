// Nullish Coalescing Operator (??) 
// -> made for null and undefined keywords.

// example->

let val1;
val1 = 5 ?? 10 

console.log(val1) // 5

val1 = null ?? 7
console.log(val1) // 7

// Ternary Operator ->
// condition ? true : false

const age = 69

age <= 50 ? console.log("Less than 50") : console.log("greater than 50")
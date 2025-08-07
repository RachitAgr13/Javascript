const name = "Rachit"

const age = 22

// to insert a variable in console.log

console.log(`Hello my name is ${name} and my age is ${age}`)

// to declare a string ->
const name2 = new String("RachitAgr")

// the string works as an object but looks like array with key value pairs
// so it is like 0 : R, 1 : a, 2 : c.......

console.log(name2.length) // 9
console.log(name2.toUpperCase()) // RACHITAGR

const newStr = name2.substring(0 , 7) //last index does not count(0 - 6)
// cant give negative index
console.log(newStr) // RachitA

const anotherStr = name2.slice(-9, 2) // last index is ignored here but can use -ve index
console.log(anotherStr)

const newStr1 = "    rachit    "
console.log(newStr1.trim()) // ignores whitespaces
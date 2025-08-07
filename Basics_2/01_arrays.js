// Array


//declaration
const myArr = [1,2,3,4,5,6]

const myArr3 = new Array(1,2,3,4,5,6,7,8)

const myArr2 = ["Apple", "Banana", "Cat"]

console.log(myArr[0])
console.log(myArr2[0][1])

// Array Methods

myArr.push(8) // adds element
console.log(myArr)
myArr.pop() // pops the last element
console.log(myArr)

console.log(myArr.includes(3)) // true (boolean result)
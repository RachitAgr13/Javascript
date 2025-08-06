//Stack (Primitive DataTypes)
//Heap (Non Primitive)

let ans = "hello"

let ans2 = ans

ans2 = "world"

console.log(ans)
console.log(ans2)

// for stack, only the reference(copy) of a variable is passed to the new variable, the original value doesnt get changed

// for Heap, it directly refers to the original value, the original value gets changed

let userOne =  {
    name : "Rachit",
    college : "psit"
}

let userTwo = userOne

userTwo.college = "abes"

console.log(userOne.college)
console.log(userTwo.college)
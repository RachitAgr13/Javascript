const coding = ["cpp", "js", "python", "java"]

const values = coding.forEach( (item) => {
    // console.log(item)
})

// ForEach does not returns any value
// console.log(values) -> returns undefined



// ------------ Filter ---------------------------


const myNums = [1,2,3,4,5,6,7,8,9]


// Filter returns value unlike ForEach.

// Using Filter ->
// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums)

// Using ForEach ->

const newNums = []

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums)
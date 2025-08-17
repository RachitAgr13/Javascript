// Reduce->


const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currVal){
    console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc + currVal
}, 0)// accumulator takes value that is given after comma.. in this case it is 0.

console.log(myTotal) // 6
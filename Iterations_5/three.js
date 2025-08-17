// for of

const arr = [1,2,3,4,5]

// Syntax ->
// for (const element of object) {
    
// }

for (const num of arr){
    // console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings)
{
    // console.log(`Each char is ${greet}`)
}

// MAPS ------------->


const map1 = new Map()

map1.set('IN', 'India')
map1.set('UK', 'United Kingdom')
map1.set('RUS', 'Russia')
map1.set('IN', 'India') // not considered

// console.log(map1)

for (const [key, value] of map1) {
    // console.log(key, "=>", value)
}

// objects are not iterable through 'For Of'
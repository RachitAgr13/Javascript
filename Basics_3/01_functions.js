
// function declaration
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
}

// execution (reference)
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2)
{
    // let result = number1 + number2
    // return result

    return number1 + number2
}
// const result = addTwoNumbers(35, 34)

// console.log(result)

function loginUserMessage(username)
{
    return `${username} just logged in`
}
// console.log(loginUserMessage("rachit"))
// console.log(loginUserMessage()) // undefined

// function calculateCartPrice(num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(2)) // 2
// console.log(calculateCartPrice(200, 400, 600)) //200

function calculateCartPrice(...num1)
{
    return num1
}
// console.log(calculateCartPrice(200, 400 ,600))

const user = {
    username : "rachit",
    age : 22
}
function handleObject (anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user) // Username is rachit and price is undefined
handleObject({
    username : "john",
    age: 48
})


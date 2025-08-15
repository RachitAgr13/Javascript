const user = {
    username : "rachit",
    age : 22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
    }
}
// by using 'this', we can easily change the value of 'username' any time...

// user.welcomeMessage()
// user.username = "john"
// user.welcomeMessage()

// console.log(this) //{} , empty list

// function func(){
//     let username = "rachit"
//     console.log(this)
//     console.log(this.username) // undefined
// }
// func()


// Arrow function ->
const chai = () => {
    let username = "rachit"
    console.log(this) // {}
}
// chai()

// example ->

// Method 1 => using 'return' keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}


// Method 2 => without "return"
const addNums = (num1, num2) => ( num1 + num2)
console.log(addNums(35, 34))
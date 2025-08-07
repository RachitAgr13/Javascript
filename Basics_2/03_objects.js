// singleton
// object.create -> to create by constructor


//  ---------  object literals ------->

const mySym = Symbol("key1")

const jsUser = { // act as key : value
    name : "Rachit",
    "full name" : "Rachit Agrahari",
    //mySym : "myKey1", // string datatype
    [mySym] : "myKey1",
    age : 22,
    location : "Kanpur",
    email : "rachit69@gmail.com",
    isLoggedIn : false,
    lastlogginIn : ["Monday", "Tuesday"]

}

console.log(jsUser.email) // not good way to access elements

//correct way
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

// changing values of object ->

jsUser.email = "rachit25@gmail.com"
console.log(jsUser["email"])
 
// freeze object (to prevent changes into it)
// Object.freeze(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
// console.log(jsUser.greeting) // gives o/p -> function (anonymous)
// console.log(jsUser.greetingTwo) // same as upper one

console.log(jsUser.greeting()) 
console.log(jsUser.greetingTwo())


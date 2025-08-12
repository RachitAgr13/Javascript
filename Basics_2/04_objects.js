// declare object
const tinderUser = new Object() // singleton

//declare object
const tinderUser1 = {} // non-singleton

tinderUser1.id = "69abc"
tinderUser1.name = "Jack"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
        firstname : "rachit",
        lastname : "agrahari"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

// combine objects

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// correct method to give parenthesis
// const obj3 = Object.assign({}, obj1, obj2)
// parenthsesis is target and others are source. 

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 1,
        email : "abc@gmail.com"
    },
]

// users[1].email
// console.log(Object.keys(tinderUser1)) // o/p in array form
// console.log(Object.values(tinderUser1))

// // to check value exists or not

// console.log(tinderUser1.hasOwnProperty('isLoggedIn'))


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course
console.log(instructor)

// JSON
// {
//     "name" : "Rachit",
//     "coursename" : "js in hindi"
//     "price" : "free"

// }


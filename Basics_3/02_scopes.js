// let a = 10
// const b = 20 // globally declared
// var c = 30

let a = 300 // global
if(true){
    let a = 10 // local scope variables
const b = 20
var c = 30
    // console.log("Inner a :", a) // local
}



// console.log(a)
// console.log(b)
// console.log(a) // 300 -> globally

function one(){
    const username = "rachit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website) // its scope is local

    two()
}
// one()

if(true){
    const username = "rachit"
    if(username == "rachit"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//  Concept

function addone(num){
    return num + 1
}
addone(5)

//expression ->
const addTwo = function(num){
    return num + 2
}
addTwo(5)
// if and else

// if(4 == 5)
// {
//     console.log("Executed")
// }
// else {
//     console.log("Not executed")
// }

// ----------------- Nested loops ------------------------- >

// const balance = 1000

// if(balance < 500)
// {
//     console.log("less than 500")
// }
// else if (balance < 750)
// {
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

const userLogginIn = true
const debitCard = true

if(userLogginIn && debitCard) // && wants every condition to be true
{
    console.log("Allowed to buy")
}

/* falsy values->
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/* truthy values ->
"0", 'false', " ", [], {}, function(){}
*/
const coding = ["js", "cpp", "python", "java"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

coding.forEach( (item) => {
//    console.log(item)
} )

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
} )


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
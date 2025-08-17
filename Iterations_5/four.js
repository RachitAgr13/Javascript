const myObject = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python'
}

// For In -> used in iterating objects

for (const key in myObject) {
    console.log(`Key is ${key} and Value is ${myObject[key]}`)
}

// For In loops when used in array, gives indexes.
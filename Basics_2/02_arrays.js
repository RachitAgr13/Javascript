const male_sup = ["cody rhodes", "john cena", "cm punk"]
const female_sup= ["becky lynch", "iyo sky", "asuka"]

/* male_sup.push(female_sup)
console.log(male_sup)
 
merges the other array as an element
*/
// const all_sup = male_sup.concat(female_sup)
// console.log(all_sup) // correct

// another way -> use spread (...arr1, ...arr2, ...arr3)

const all_sup2 = [...male_sup, ...female_sup]
console.log(all_sup2)


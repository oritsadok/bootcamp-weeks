const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i=0; i<names.length; i++) {
    const obj = {};
    obj["name"] = names[i]
    obj["age"] = ages[i]
    people.push( obj )
}

console.log(people)//i make new objects inside a new array 
//combining to arrays as key and value




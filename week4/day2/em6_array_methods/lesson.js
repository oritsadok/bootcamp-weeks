// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = []
// for(let age of ages){
//   if(age > 16){
//     olderThan16.push(age)
//   }
// } // here we uusing the oldest way

//filter- return a new array  (where each item matches the guven filter)
// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]

// let olderThan16 = ages.filter(a => a > 16)
// console.log(olderThan16) // prints [41, 32, 27, 18, 19, 19, 58, 41]
//when we do (a => a > 16), what we are saying is "for every a inside of ages, return true or false for the expression a > 16"


// const isGreaterThan16 = function (age) {
//     return age > 16
// }
// let olderThan16 = ages.filter(isGreaterThan16) //notice that passing in the function will implicitly pass it the `a` parameter that the function expects


// const isGreaterThan16 = (a) => a > 16
// let olderThan16 = ages.filter(isGreaterThan16)



//forEach-return nothing (undifinde)

// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]


// let orangeVegetables=vegetables.filter(v=>v.color=="orange")

// for (let vegetable of orangeVegetables) {
//     console.log(vegetable.name) //the oldest way
// }
//shorter way using foreach
// orangeVegetables.forEach(ov => console.log(ov.name))




// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const raiseSalary = function (person) {
//     if (person.goodPerformance) {
//         person.salary += 300
//     }
// }
// people.forEach(raiseSalary)
// people.forEach(p => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)




//map- return a new modifides arrow
// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]



// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let lowerCased= messagesFromDad.map(mf=>mf.toLowerCase())




// let users = [
//     {
//     "name": "Leanne Graham",
//     "address": {
//         "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//         "geo": { "lat": "-37.3159", "lng": "81.1496" }
//     }
// }, {
//     "name": "Ervin Howell",
//     "address": {
//         "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//         "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//     }
// }
// ]

// users.map(u => { return { name: u.name, city: u.address.city } })




//find-return the first item that matches the filter

// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

//the oldest way
// const findById = function (id) {
//     for (let post of posts) {
//         if (post.id == id) {
//             return post
//         }
//     }
// }

//using find method
// const findById = id => posts.find(p => p.id === id)
// console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}



// const findCommentByID = (postID, commentID)=>{
//     let post = findById(postID)
//     return post.comments.find(c => c.id == commentID)
// }
// console.log(findCommentById(1, 0)) // {id: 0, text: "here I am"}



//every- recive condition andreturn true or false for all

// let ages = [31, 28, 23, 27, 25, 16, 24]
// console.log(ages.every(a => a > 18)) //returns false


//some - recive condition andreturn true or false
// let menu = [
//     { name: "Beef stew", vegetarian: false },
//     { name: "Beef sandwhich", vegetarian: false },
//     { name: "Carrot on a stick", vegetarian: true },
//     { name: "Beef eggroll", vegetarian: false },
// ]

// menu.some(m => m.vegetarian) //returns true



// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]


// if(movies.some(m=>m.studio==="Marvel")){ //we serching if at least one movie is by marvel
//     console.log("lets go watch some movie")
// }
// else {
//     console.log("Let's stay home")
// }
// if (movies.every(m => m.year > 2020)) { //we serching if all the movies are from after 2020
//     console.log("Futuristic stuff")
// }
// else {
//     console.log("Yawn")
// }



//chaining

// let countries = [
//     { name: "Greece", population: 500 },
//     { name: "Namibia", population: 1200 },
//     { name: "Finland", population: 100 },
//     { name: "Switzerland", population: 300 },
//     { name: "Peru", population: 200 }
// ]

// let smallCountries = countries
//.filter(c => c.population < 500)
//.map(c => c.name)
//weve filterd all cuntries with population that less then 500 
//and then mapped those that match the filter to only have the country's names.









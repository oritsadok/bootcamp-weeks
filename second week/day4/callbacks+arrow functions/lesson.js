// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000)
// }

// getData()


// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()
// because we  set timeout,were reciving the getdata function 3 sec after the display data even thoght we call it first




// const first = function (callback) { //receive the function as a parameter
//     setTimeout(function () {
//         console.log("should be first")
//         callback() //this is the `second` function being invoked
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument




// let users = []

// const getData = function (callback) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
//displayData()




// const doSomething = function(){
//   console.log("something")
// }

// setTimeout(doSomething, 3000) //will invoke doSomething in 3 seconds
//we put the func "dosomething" inside the functuion set timeout




// const timer = function(){
//   console.log(new Date())
// }

// setInterval(function () {
//     console.log(new Date())
// }, 1000)
//weve rewrite without a const 
//we set that every aec we got consile the date



//arrow function

//example

// const greet = function() {
//   console.log("Hello there")
// }// thats the way we write it unteel now

// const greet = () => {
//   console.log("Hello there")
// }// this func say the same but using arrow


//example

// const greet = (name) => {
//   console.log("Hello there, " + name)
// }
// greet("Jolene") //prints "Hello there, Jolene"

//  const greet = name => console.log("Hello there, " + name)
// greet("Jolene") //prints "Hello there, Jolene"

//no curly braces needed and no parentheses around the argument






// const sqaure = (num) => console.log(num*4)
// sqaure(4)
//i defined "sqaure" fanc which recive num to it and console it *4



// const add = (x, y) => {
//   return x + y
// }
// const sum = add(1, 2) 
// console.log(sum) //prints 3


// const add = (x, y) => x + y
// const sum = add(1, 2) 
// console.log(sum) //prints 3
// in this new syntax we dont need the return to get back the answer



// const getHypotenuse = (a, b) => {
//   const aSquared = a * a
//   const bSquared = b * b
//   const cSquared = aSquared + bSquared
//   return Math.sqrt(cSquared)
// }

// const hypoteneuese = getHypotenuse(3, 4) 
// console.log(hypoteneuese ) //prints 5
// for comolacity funcs wll steel need the return and the curly braces



// const getFormalTitle = (title,name) => (title+" "+name)

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"




//this
// In normal functions, this refers to the object that called the function.
// But arrow functions do not create their own this context. 
// As such, this keeps its original meaning from its enclosing context.


//example
// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(function () { //normal function
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }

// suspenseBuilder.displayName()

//The suspenseBuilder object has two keys: a name string and a displayName method.
// The displayName method has a console log,
// then sets a timeout to wait 3 seconds before console logging this.name
// However.. With regular functions, this is the object that called the function 
// but who called that callback function in setTimeout? No one called it
// Therefore, since "no one" called the function, 
//this will just be the general window object
 //and this.name will be undefined.


// const suspenseBuilder = {
//     name: "El Mysterio",
//     displayName: function () {

//         console.log("You are going to see the name in 3 seconds...")

//         setTimeout(() => { //this is the change
//             console.log("The name is: " + this.name)
//         }, 3000)

//     }
// }
// suspenseBuilder.displayName()

// This works because in arrow functions,
// this is determined by lexical scope. 
//That just means that it doesn't matter who called the function
// but rather where it was called - the context of the function.
// In this case, the callback function was called inside suspenseBuilder
// and as such this will equal suspenseBuilder!










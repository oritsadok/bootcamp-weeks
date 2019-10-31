
//weve use modules like this so far
// const someModule = function(){

//   const _somethingPrivate = 3
//   const exposePrivates = () => _somethingPrivate

//   return 
//     {
//       exposePrivates: exposePrivates
//     }
// }
// const m = someModule()
// console.log(m.exposePrivates()) //prints 3




// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }


// const cat = new Animal("Puss", 4)
// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"



//sp1

// const dog = new Animal("moshe",4)
// console.log(dog.name)

//sp2
// class Human {
//     constructor(name, age, isFreindly) {
//         this.name = name
//         this.age = age
//         this.isFreindly = isFreindly
//     }
// }

// const h = new Human("avi",5,true)
// console.log(`${h.name}, who is ${h.age} years old, is ${h.isFriendly ? 'friendly' : 'not friendly'}`) 



//methods
//we cannot define anything (for the most part) outside of the constructor, other than methods.


// class Animal {
//     constructor(name, numLegs,children) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children=[]

//     }

//     giveBirth(name){
//         this.children.push(name)

//     }
// }
// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]



//Prototype & Static Methods


// class Vehicle {
//     constructor(x, y, speed) {
//         this.x=x
//         this.y=y
//         this.speed=speed
//     }
//     getInfo(){
//         console.log("cars are great")
//     }
// }

// const ferarry =new Vehicle(5,6,200)
// ferarry.getInfo()
// console.log(ferarry)


// class Vehicle {
//     constructor(x, y, speed) {
//         this.x=x
//         this.y=y
//         this.speed=speed
//     }
//     static getInfo(){ //when we add the static we dont need the instance to call the function and we can do it directly from the class
//         console.log("cars are great")
//     }
// }

// Vehicle.getInfo()



// class Vehicle {
//     constructor(x, y, speed) {
//         this.x = x
//         this.y = y
//         this.speed = speed
//         Vehicle.carsSold++;
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney() {
//         console.log(Vehicle.carsSold * 30000)
//     }
// }

// Vehicle.carsSold = 0;
// let v1 = new Vehicle("x", "y", 200)
// let v2 = new Vehicle("x", "y", 300)
// let v3 = new Vehicle("x", "y", 400)

// Vehicle.calculateMoney()




//Getter & Setter

// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         this._fuel = fuel
//     }
//     set fuel (fuel){
//         if(fuel>150){
//             return console.log("too much fuel in your tank")
//         }
//         if(fuel<0){
//             return console.log("yuot out of fuel")
//         }
//         this._fuel=fuel
//     }
    
//     get fuel() {
//         return this._fuel
//     }
    
//     set speed(speed) { //
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     get speed() {
//         return this._speed
//     }
// }

// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = 10 // at this point, we'll get the console log saying speed needs to be positive
// c.fuel = 5
// console.log(c) 



//uml -  Unified Modeling Language 


// class Animal {
//     constructor(name, numLegs) { //name val = string, numLegs=number
//         this.name = name
//         this.numLegs = numLegs
//         this.children= [] // empty array that recive strins
//     }
//     birth(name){ //this method push name to children array
//         this.children.push(name)

//     }
// }
// const dog = new Animal("motek",4)
// dog.birth("puppy")
// console.log(dog)



// class Zoo {
//     constructor() {
//         this.animals = []
//     }

//     addAnimal(animal) {
//         this.animals.push(animal)
//         console.log("Added " + animal.name + " to the zoo")
//     }

//     showAnimals() {
//         this.animals.forEach(a => console.log(a.name))

//     }
// }

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const zoo = new Zoo()

// zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// zoo.showAnimals() // prints "Puss"











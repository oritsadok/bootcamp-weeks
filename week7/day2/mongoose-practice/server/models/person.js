const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })//conneting mongoose to our db


// Schema/model setup

const Schema = mongoose.Schema

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number
})

const Person = mongoose.model('person', personSchema)
module.exports = Person



// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) 
// console.log(p1)
// //p1.save()  //if we want to save this document = create

// Person.find({}, function (err, people) {//We use the find method (on the model) which takes two parameters: a filter (similar to Mongo), and a callback function which will hold our data
//     console.log(people)
// })

// same query using promise
// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())


// //update - we first find and than make the update inside the callback and then save()
// Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
//     person.age += 10 //how time flies
//     person.save()
// })


// Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, { new: true }, function (err, person) {
//     console.log(person)
// })

//delete
// Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
//     person.remove(function (err) {
//         console.log(err) //usually this will be `null`, unless something went wrong
//     })
// })



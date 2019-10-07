//A closure is an inner function that has access to the outer (enclosing) function’s variables.



// const foo = function () {
//   const x = 1

//   const bar = function () {
//     console.log(x) //notice this inner function using the outer function's variable
//   }

//   return bar
// }

// const baz = foo() //out here, x doesn't exist
// baz() //but when we invoke baz, we're printing x!



//  const setCounter = function (num) {
//   let counter = 0

//   const count = function () {
//     counter += num;
//     console.log(counter)
//   }

//   return count
// }

// const increment = setCounter(2)
// increment()




// const family = function () {
//   const  members = []
//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = family()
// giveBirth("ori")



//modules


// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
// }

// }
// const m = mathOperations()
// console.log(m.div(5,6))



// const mathOperations = function(){
//     const add = function(x,y){
//     return x+y;
// }
// const mult = function(x,y){
//     return x*y;
// }
// return{
//     add: add,
//     mult: mult,
// }
// }

// const m = mathOperations()
// console.log(m.add(13,29))

// console.log(m.mult(1.75,24))

// console.log(m.mult(7,36)/6)
//gain, m is just a normal JS object. 
//So if we do m.mult, all we're doing is accessing the value of the property mult 
//which in this case happens to be the multiply function!



// const names = function () {

//     const myname = function (name) {
//         return "i like" + name
//     }
//     const hername = function (name) {
//         return "i like" + name
//     }
//     return {
//         first: myname,
//         second: hername
//     }
// }

// const n = names()
// console.log(n.first(" ori"))
// console.log(n.second(" shaked"))



const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('ori')
usersModule.addUser('barak')
usersModule.listUsers()//print  all the users

console.log(usersModule.user)
//undefined - because the closure hasn't given us access to users, 
//only to the functions!














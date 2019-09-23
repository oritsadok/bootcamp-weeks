/*const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}

console.log(bag)
console.log("Added " + nextItem)//Uncaught ReferenceError: nextItem is not defined

// דוגמה לכך שלא נוכל להשתמש בסקופ בכללי במשתנה שהגדרנו בתוך בלוק קוד
*/


/*let height = 1.73

const grow = function(){
  height += 0.1
}

grow()
console.log(height)//נקבל 1.83
//במקרה הזה הגובה מוגדר בסקופ הכללי ולכן הפומקציה תתקיים ןהגובה יגדל




/*const getBaseHeight = function(){
  const height = 1.73  
  return height
}

const grow = function(){
  height += 0.1
}

grow()
//כאן נקבל ארור כי הגובה מוגדר רק בתוך הפונקציה
*/



/*const names = ["Allison", "Beatrice", "Charles"]

for(let n of names){
  let coolName = "cool " + n
  console.log(coolName)
}

console.log(coolName) // throws an error
//דוגמה למשתנה שהגדרנו בתנאי-לא נוכל לקרוא לו מחוץ לתנאי
*/




//===================================================================================
//Section 1
//===================================================================================
/*const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running") 
    }
    console.log("Finished running " + distance + " miles")//Finished running 8 miles

}
console.log("Damn, you see this gal? She ran " + distance + " miles")    


//distance not defined
//yes - not defined
//because we defined distance at a local scope
//no its not definde
//because we defined distance at a local scope
//distance belong to if scope
*/



//===================================================================================//Section 2//===================================================================================
/*if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

//===================================================================================
//cowSound is not definde
//yes
//because we use cowSound variable at another local scope
//no
//because its not defined
//cowSound belong to local scope if
*/


/*
//Section 3
//===================================================================================
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)//served a special fish
    }

    console.log("Finished serving all the orders: " + orders)//finish....orders fish..
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
//no eror
//becasue allOrders defined at global scope 
//no, everything is defined prperly
//specialOrder to local scope for loop,allOrders to global scope

*/
//===================================================================================
//Section 4
//===================================================================================
/*const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)//not defined
}

plant()

// error not defined
//pot to global scope
//seed to local scope getSeed

*/
/*
//===================================================================================
//Section 5
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
*/
//error because found is not defined
//the found var is in a local of if statement and we try to use it outside of the defined it
//however if we want that func to exist er need to remove the return inside the if state









//===================================================================================
//Section 6
//===================================================================================
/*let isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
*/
//finaly sheesh
//no error because every var defined properly
//isEnough is in a global scope

const quiz = {
    code: function() {console.log(this.answers.c + ' is not the answer')},
    answers: {
        a: `answers`,
        b: 'this is not the answer',
        c: `this`,
        d: `21`,
        e: `both a and c`,
        f: 'both a and d'
    }
}

console.log(quiz)





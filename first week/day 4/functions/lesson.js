/*const tellAjoke = function(){
    console.log("a very funny joke")
}
tellAjoke()*/




/*const greet = function(name){
  console.log("Hello there, " + name)
}

const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

for(let n of names){
  greet(n)
}//אם נרצה לקרוא לפונקציה כמה פעמים
//האן קורא כל פעם לערך אחר במערך ועושה את הפונקציה והאן ביחד*/




/*const greet = function (time) {
    if(time==1){
        console.log("good morning")
    }
    if(time==2){
        console.log("good afternoon")
    }

    if(time==3){
        console.log("good evning")
    }
}
greet(1)
greet(2)
greet(3)//כאן רצינו  שבכל פעם שנתן מספר נקבע ערך לפי התנאי*/




/*const greet = function(time){
    console.log("good "+ time)
}

 const say = ["morning","afternoon", "evning"]
for(let n of say){
  greet(n)
}//יתן אותה תוצאה כמו למעלה- בוקר טוב וכן הלאה*/




/*const createUser = function(name, age){
  const user = {name: name, age: age}
  console.log(user)
}
createUser("William", 27)

// prints {name: "William", age: 27}
//
*/




/*const growOld = function(user){
  user.age++
}
const aDude = {name:"Ayd Ood", age: 23}
growOld(aDude)

console.log(aDude) // prints {name: "Ayd Ood", age: 24}*/
//הכנסנו משתנה של אובגקט בתוך הפנקציה




/*const greet = function(name){
  console.log("Hello, " + name)
}

const growOld = function(user){
  user.age++
}
greet() // prints "Hello, undefined"
growOld() // throws an error*/





/*const multiply = function(x, y = 2){
  console.log(x * y)
}
multiply(3, 4) // prints 12
multiply(3) // prints 6*/
// 




/*const changeArray = function(arr){
  let innerArray = arr
  innerArray[0] = 50
}

const numbers = [1, 2, 3]

changeArray(numbers)
console.log(numbers) // prints [50, 2, 3]*/



/*const add = function(x, y){
  x + y
}
const sum = add(1, 2)
console.log(sum) // prints undefined


const add = function(x, y){
  return x + y
}
const sum = add(1, 2)
console.log(sum) // prints 3 !*/




/*const example = function(){
  while(true){
    return
  }
}
//כשנגדיר לפונקציה לחזורת, החזרה תמיד תקיים את הפונקציה. בחזרה נקבל אמת
*/



/*const add = function(x, y){
  const sum = x + y
  return sum
  console.log("Returned " + sum)
}
add(1, 2)

console.log(add(1,2))*/





/*const getInterest = function(money){
  return money * 0.2
}

const getDebt = function(money){
  const interest = getInterest(money)
  return money + interest
}

const borrowedMoney = 100
const debt = getDebt(borrowedMoney)
console.log(debt) // prints 120
*/




/*function greet(){
  console.log("Hello there, from the wild, wild West")
}
*/
//ככה נסמן פונקציה שמטרתה הצהרה
//נוכל לקרוא לה מכל מקום




/*greet() //works without a problem
greetExpression() //throws an error

function greet(){
  console.log("Hello there, from the wild, wild West")
}

const greetExpression = function(){
  console.log("Uh oh")
}
*/




const person = {
  name: "Julius",
  speak: function (food) {
    console.log("i like" + food)
  }
}
console.log(person.name) //you know what this will do

person.speak("cheese toast") //and this? Try it out!

//כאן אנחנו מאחסנים פונקציה בתוך קי של אובגקט כשאנחנו עושים אה נוכל להתייחס אליה כמו כל קי וגם לקרוא לה כמו לפונקציה

























/*let person = {
  name: "Mariah",
  occupation: "Gangster"
}
console.log(person.name + " is a " + person.occupation)*/
//חיברנו בין שני ערכי האובגקט



/*const bag = {
  weight: 10,
  owner: "Larissa",
  items: ["Pen", "Bottle", "Book"]
}
//If we want to access all the items in the array, simple:
console.log(bag.items) // prints ["Pen", "Bottle", "Book"]

//Now say we wanted to get the bottle:
console.log(bag.items[1]) // "Bottle"*/
//אם נרצה להדפיס את האובגקט או חלק ממנו



/*const car = {
  color: "brown",
  numWheels: 4,
  isFancy: true
}
console.log("The " + car.color + " car has " + car.numWheels + " wheels.")

if (car.isFancy) {
  console.log("It is fancy")
}
else {
  console.log("It is not fancy")
}*/
//שילבנו בין אובגקט לתנאי על לקבוע תנאי לערכים בתוך האובגקט




/*let ori = {
  item: "man",
  toBeginning: "true",
  items: ["head", "hand", "legs"]
}
if (ori.toBeginning) {
  ori.items.unshift(ori.item)
}
else {
  ori.items.push(ori.item)
}
console.log(ori.items)*/
//דחפנו ערכים למערך בתוך האובגקט על ידי תנאי



/*const animalCounts = {
  lion: 2,
  zebra: 11,
  ostrich: 1,
  tortoise: 4
}
//Suddenly the zoo acquired two dozen eagles

animalCounts.eagle = 24
//or
animalCounts["eagle"] = 24

console.log(animalCounts)
//כשנרצה להוסיף ערך לתוך האובגקט*/



/*const human = {
  age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

human.babyNameKey = babyNameValue
//console.log(human)
//כשנרצה להוסיף משתנים שאחד מהם הוא קי ואחד ערך*/

/*human.age = 1
console.log(human)*/
//שינינו את הערך שבתוך הקי שבאובגקט


/*let instructor = {
  age: 27
}
//If we wanted to change age's value to 28 we could do any of the following:

instructor.age += 1
instructor["age"] += 1
instructor.age++
instructor["age"]++
instructor.age = 28
instructor["age"] = 28*/
//שינינו את הערך שבתוך נקי שבאובגקט



/*let apple = {
  color: "red",
  name: "apple"
}

let cheese = {
  color: "yellow",
  name: "cheese"
}

let foods = [apple, cheese]

console.log(foods[0].name) // apple
console.log(foods[1].color) // yellow
//כשנרצה להשתמש באובגקטים כערכים בתוך מערך*/



/*const bag = {
  weight: 10,
  owner: "Larissa",
  items: [                   // an array with objects in it!
    {item: "Pen", count: 2},
    {item: "Bottle", count: 1},
    {item: "Book", count: 3}
  ]
}
//console.log(bag.items[2].count) // אם נרצה לדעת כמהפסםרים יש לללריסה בתיק
console.log(bag.items[0].item)//כשנרצה את החפץ הראשו שיש בתיק
*/




/*let numbers = [1, 2, 3]
let nums = numbers

nums[0] = 50
console.log(nums)
console.log(numbers)
// נוכל להחליף כך את הערך שבמערך. נוכל לכתוב זאת בשני הדרכים שלמעלה
*/



/*let person = {
  firstName: "Dopple",
  lastName: "Ganger"
}

let p = person
p.firstName= "Chappy"

console.log(p)
console.log(person)
// החלפנו שם בתוך המערך
*/













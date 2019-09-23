/*let mystuff = ["book","tv","phone"]
mystuff.push("book")
mystuff.unshift("phone")
console.log(mystuff)*/ //כשנרצה לדחוף ערכים לסוף ולהתחלה



/*let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]
employees.push(...candidates)
console.log(employees)//כשנרצה להוסיף מערך בתוך מערך*/


/*const lastitem = mystuff[0]
const firstitem = mystuff(mystuff.length - 1) 

mystuff.unshift(lastitem)//push "phone" to the begining
mystuff.push(firstitem)//push "book" to the end
 console.log(mystuff)*/



 /*let fridge = ["Milk", "Eggplant", "Truffle", "Edible shoe"]
let removedItem = fridge.splice(3, 1)

console.log(removedItem) // prints ["Edible shoe"]
console.log(fridge) // prints ["Milk", "Eggplant", "Truffle"] 
// כשנרצה למחוק את הערך האחרון*/


/*let badHabbits = ["Pizza", "Sugars", "White bread"]
let removedHabbits = badHabbits.splice(1)

console.log(removedHabbits) // prints ["Sugars", "White bread"]
console.log(badHabbits)// prints ["Pizza"]*/
//שנזין רק אינדקס בלי כמות בתוך הספלייס הוא ימחק הכל ממנו והלאה


/*const associations = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

associations.splice(0, associations.length - 1)//when we  want to erse exept from the last
console.log(associations) // prints ["life"]
//כשנרצה למחוק הכל חוץ מהערך האחרון*/


/*const people = ["Fred", "George", "Ron"]

people = ["Roger", "Alan", "Hewitt"] // this will throw an error
people[0] = "Alex" // allowed
people.push("Bellinda") // allowed
people.splice(2, 1) // allowed*/
//אררי שמוגדר בקונסט לא נוכל להחליף את הערכים אבל לדחוף ולמחוק נוכל

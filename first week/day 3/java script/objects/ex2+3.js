let myList = [
    { shirt: 2, shoe: 2 },
    { shirt: 3, shoe: 4 }
]

myList[0].shirt = 5 //מחליף את הערך הראשון באובגקט הראשון

//console.log(myList[0].shirt)

myList.splice(1);

//console.log(myList)
// מחקנו את הערך  השני במערך


let secList = [
    {pents:7, hat:1},
    {pents:8, hat:2}
]

myList.push(secList)

console.log(myList)
//הוספנו מערך בתוך מערך ששניהם מורכבים מאובגקטס
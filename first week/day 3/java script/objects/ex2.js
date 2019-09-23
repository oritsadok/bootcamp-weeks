let myList = [
    { shirt: 2, shoe: 2 },
    { shirt: 3, shoe: 4 }
]

myList[0].shirt = 5 //מחליף את הערך הראשון באובגקט הראשון

console.log(myList[0].shirt)

myList.splice(1);

console.log(myList);
//שינינו את הערך באינדקס הראשון של המערך
//ואז מחקנו את הערך  השני במערך
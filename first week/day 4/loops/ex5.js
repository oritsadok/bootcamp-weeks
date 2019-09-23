let nums = []

let i = 0
while (i < 100) {
    nums.push(i)
    i++
}
console.log(nums)//


let counter = 0

for (let value of nums) {
    if ((value % 2) === 0) {
        // counter++
        console.log(value)//כל המספרים הזוגיים במערך
    }


}


//console.log(counter)//הכמות של המספרים הזוגיים שחיפשנו

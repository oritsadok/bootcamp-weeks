let numbers = [10, 20, 30, 40, 50]

let sum = 0

for (let i in numbers) {
    sum = (sum + numbers[i])
    
}

let avg = sum / numbers.length


console.log(avg)

//ממוצע של מספרים-לשים לב שנצטרך להגדיר את ממוצע החישוב במשתנה
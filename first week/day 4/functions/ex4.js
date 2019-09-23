/*const isEven = function (num) {
    if (sum = num % 2 === 0) {
        return true
    } else {
        sum = num % 2 === !0
        return false

    }
}

//isEven (2)

console.log(isEven(3))

*/


let myF = function (arr) {
    let oddN = []
    for (let i of arr) {
        if (i % 2 !== 0) {
            oddN.push(i)
        }
    }
    return oddN
}
let odd = myF([1, 2, 3, 4, 5, 6, 7, 8, 9])


console.log(odd)
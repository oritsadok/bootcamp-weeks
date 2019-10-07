let nums = [1, 2, 3]
let myN = 5

const fun = function (arr, num) {
    for (let i of arr) {
        if (num === nums[i]) {
            return true
        }
    }
    return false
}

checkExists = fun(nums, myN)
console.log(checkExists)
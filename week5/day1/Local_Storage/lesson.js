// //getting items
// localStorage.name ="ori"

// console.log(localStorage.getItem("name"))



// //removing
// localStorage.removeItem('name')//removing spec item

// localStorage.clear()//remove anything



//Storing Complex Data
// localStorage.personalData = JSON.stringify({    //using JSON.strigify allow us to sotre it all in a string
//   averageTimeOnSite: {unit: "hr", amt: 9},
//   probabilityOfFriends: 0.02,
//   commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })

// let userStuff = JSON.parse(localStorage.personalData)// JSON.parse allow us to extact the value from the "string store"

// console.log(userStuff.probabilityOfFriends)     //prints 0.02



// localStorage.userStorage = JSON.stringify({
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// })

// let getCartCount = JSON.parse(localStorage.userStorage)
// console.log(getCartCount.cart[1].count)



//Prudence & Practice

// localStorage.dataThatIsImportant = {
//     name:"dkdkdk",
//     klmdkcdc:3232

// }

// let data = JSON.parse(localStorage.dataThatIsImportant || "[]")
// data.forEach(d => console.log(d))



const input = `<input class='input' name='in' type='text'></input>`
const button = `<button class='btn'>click me</button>`
$(".content").append(`<div class=add>${input} - ${button}</div>`)

let wisdom = []
let id = 0


$(".content").on("click", ".btn", function () {
    const text = $(".input").val()
    const newDiv = `<div id = ${id++}>${text}</div>`
    $(".user-text").append(newDiv)
    wisdom.push({ text: text })
    if (wisdom.length % 2 == 0) {
        localStorage.wisdom = JSON.stringify(wisdom)
    }
}
)
addWisdom.forEach(a => $(".content").append(`<div> <span id=${a.id}>x</span> ${a.text}</div>`))
let addWisdom = JSON.parse(localStorage.wisdom || "[]")


const button1 = `<button class='button1'>clear wisdom</button>`
$(".content").append(`<div>${button1}</div>`)

$(".content").on("click", ".button1", function () {
    localStorage.removeItem("wisdom")
})


$(".content").on("click", "#remove", function () {
    localStorage.wisdom.remove()
})

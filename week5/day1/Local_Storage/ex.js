const input = `<input class='input' name='in' type='text'></input>`
const button = `<button class='btn'>click me</button>`
$(".content").append(`<div class=add>${input} - ${button}</div>`)

let wisdom = []
let id = 0


$(".content").on("click", ".btn", function () {
    const text = $(".input").val()
    const newDiv = `<div id = ${id++}> x  ${text}</div>`
    $(".user-text").append(newDiv)
    wisdom.push({ text, id })
    if (wisdom.length % 2 == 0) {
        localStorage.wisdom = JSON.stringify(wisdom)
    }
}
)
let addWisdom = JSON.parse(localStorage.wisdom || "[]")
addWisdom.forEach(a => $(".content").append(`<div> <span id=${a.id}>x</span> ${a.text}</div>`))


const button1 = `<button class='button1'>clear wisdom</button>`
$(".content").append(`<div>${button1}</div>`)


$(".content").on("click", ".button1", function () {
    localStorage.removeItem("wisdom")
})


$(".user-text").on("click", function () {
    let id =  $(this).closest(".user-text").
    
})

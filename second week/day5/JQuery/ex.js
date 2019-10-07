

//ex1

// const input =$("<input id=input type=text placeholder=human-name></input>")

// $("body").append(input)

// const button = $("<button id=button>add human</button>")

// $("body").append(button)


// $("button").on("click", function(){
//     let newInput = input.val()
//     let newName = `<li>${newInput}</li>`
//     $("#ul").append($(newName))
    
    
//  })



//ex2


const input =$("<input id=input type=text placeholder=human-name></input>")

$("body").append(input)

const button = $("<button id=button>add human</button>")

$("body").append(button)


$("button").on("click", function(){
    let newInput = input.val()
    let newName = `<li>${newInput}</li>`
    $("#ul").append($(newName))
    
 })

$("ul").on("click", "li" , function(){
    $(this).remove()
})



//ex3
const box = $("<div class= ")









//1.Store application data in one place only (an array, or a certain file, etc)
//2.Update your data in response to events (a click, a key press, a mouse-over, etc) -
// don't update your DOM directly when events happen
//3.Render your views only in response to changes in your data


//ex1


const posts = [
    {
        name: "Uncle Jerome",
        text: "Happy birthday kido!"
    },
    {
        name: "BFF Charlene",
        text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
    },
    {
        name: "Old High School Teacher",
        text: "Hey ace, have a good one."
    }
]

const render = function(){
    
    for(let post of posts){
        const div =$(`<div> ${post}</div>`)
        $("body").append(div)
        
    }
}


const input =$("<input id=input type=text placeholder=name></input>")
const in1 =$("#input")
$("body").append(in1)

const input2 =$("<input id=input2 type=text placeholder=text></input>")
const in2 = $("input2")
$("body").append(in2)

const button = $("<button id=button>add human</button>")
$("body").append(button)

$("button").on("click",function(){
    let newName = in1.val()
 let newText = in2.val()
 posts.push("name: "+newName,"text: "+newText)
 render()
})










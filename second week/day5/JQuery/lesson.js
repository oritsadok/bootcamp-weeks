//vanilla JS
//document.getElementById("container").style.display = "none" 

//jQuery
//$("#container").hide() //when we select elements with jQuery,
// we also get methods that can work on the element, on top of the element itself


// const header = $("#first")

// console.log(header)


// console.log(jQuery)


// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//     return document.getElementById(elementId)
//         }
//     }
// console.log(myQuery("#first"))



//Methods
// $("h4")
// $("h4").css("color", "red")



// $("h1").css("color","blue") //im approching to the element "h1" and changing color to blue
// $(".red-div").css("color","red")

// $("li:first-child").css("background-color","green")
// $("li:last-child").css("background-color","pink")
// $("#brown-div").css("color","brown")


// $("#b1").addClass("box")
// $("#b2").addClass("box")
//adding class by targeting the id


// $("#my-input").val("Terabyte")
//accessing/changing elmnet's value


// const color = $("div").data().color  
// console.log(color) //prints #2980b9
//use to access data of the element


// const data = $("#access").data()
// console.log("item with barcode " + data.barcode + " will expire on " + data.expirationDate)
// //we access to the data at the div and print it with strings



//events
// $('button').click(function () {
//   alert('clicked!')
// })

// $('button').click(function () {
//   alert('clicked!')
// })

// const clicked = function () {
//   alert('clicked!')
// }
// $('button').click(clicked)
//this is 3 options of click event. when we click there will be alert of clicked


// $("#hover").hover(function(){
//    $("#hover").css("background-color","blue")
// })
//changing background-color by hover


// $("button").addClass("butt")

// $(".butt").click(function(){
//     alert("click me")
// })
//there will be alert when clicking the button



//this

// $("#b1").hover(function () {
//     console.log($(this))
// })
//The function is hover, the object that called the function is $("#b1")
// - so this is the element with an ID of b1!


// $(".box").hover(function(){
//     $(".box").css("background-color","blue")
// })



//Creating & Adding/Removing

// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// we can create a new element by writing it in ""
// and then warp it with $

// $("body").append(elem)
//with append we adding it to the body of page 


// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


// const text = "Banana"
// const item = $("<div class=fruit>" + text + "</div>")
// console.log(item) 
//prints <div class=fruit>Banana</div> 
//as a jQuery object - this is what we created!

// const text = "Banana"
// const item = $(`<div class=fruit>${text}</div>`)
// console.log(item) //the same



// $(".feedme").on("click", function(){
//   let divCopy = `<div class="feedme"> ${$(this).text()} </div>`

//   $("body").append(divCopy)
// })



// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)//this will add a div whith the name of every person to the body
// }

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]
//       for (let name of names){
//           $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
//         }
//  we add the first+last name from the array to the body     



//Removing


//$("p").remove()
//removing all p from the page


//$("p").remove(".brown")
//removing specfic p with id


// $(".mydiv").hover(function(){
//     $(".mydiv").remove()
// })
//removing content of the div by hover on it



//Dynamic Event Listeners


// const addDiv = function () {
//     $("body").append("<div class=box></div>");
// };

// $("button").on("click", function () {
//     addDiv();
// });

// $("body").on("click", ".box", function () {
//     alert("hi");
// });

// there are 2 event listenrs here click for button and and click for the element of box
//whenever we click the button the adddiv() will be invoked - bcs its already exits at the html
//For any element with a class of box inside of body, add a click listener to it. 
//the ".box" - is called a selector and it restricts the click event to only the .box descendants of body.


// $("button").on("click", function () {
//     $("#blogs").append("<div class=blog>first blog</div>")
// })

// $("#blogs").on("click", ".blog", function () {
//     $(".blog").text("blargh")

// })
//i create a listener that append div that have a class and text inside
//now every tume that i clicked the butoon it shuld give the text
//i create another listener - every time i click on the text it will be change all!! text to the new text that i set
//the .blog say that only the element with this class will be change




// $("button").on("click", function () {
//     $("#blogs").append("<div class=blog>first blog</div>")
// })

// $("#blogs").on("click", ".blog", function () {
//     $(this).text("blargh")

// })

//when i change it to this,it will change the text on click only for the specific element that i clicked on
//and will not change all the text like before












// // turn our "template" into html-we use jQuery's .html method to select our template and convert it to an HTML string in our javascript
// var source = $('#store-template').html();

// // compile our template html using handlebars- we invoke Handlebars' compile function and pass in source. It returns a new function that we will use to fill our HTML in with our Javascript data.
// var template = Handlebars.compile(source);

// // fill our template with information- Now we invoke our new template function and pass in an object as an argument. 
// var newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// var newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);




// Write a for loop here that loops through
// the items array, creates a template for each
// item, and appends it to the items div.

// var items = [
//   { item: "cheese", price: 15 },
//   { item: "arak", price: 68 },
//   { item: "hummus", price: 15 },
//   { item: "pita", price: 5 }
// ]
// let source = $("#store-template").html()
// let template = handlebars.compile(source)

// for(let item of items){
//   let newItem = tamplate(item)
//   $(".items").append(newItem)
// }





//now at the html we have {{#each}}-{{/each}} that replacing the need of loop

// const menuData = {
//   menu: [
//     { name: "Google", link: "http://google.com" ,socialNetwork:true},
//     { name: "Facebook", link: "http://facebook.com",socialNetwork:true },
//     { name: "Instagram", link: "http://nstagram.com",socialNetwork:false },
//     { name: "Twitter", link: "http://twitter.com" ,socialNetwork:false},
//   ]
// };

// const source = $('#menu-template').html();
// const template = Handlebars.compile(source);

// const newHTML = template(menuData);//tamplate must recive an object inside!

// // append our new html to the page
// $('.menu').append(newHTML);





// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the answer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }

// const source = $("#new-template").html();
//  const template = Handlebars.compile(source);

// const newHtml = template(classData)
// $(".class-data").append(newHtml)




// let foodType = {
//    type: [
//        {name:"hamburger",taste:"excellent",use:true},
//         {name:"pizza",taste:"good",use:true},
//         {name:"avocado",taste:"ok",use:false}
// ]
// }

// const source = $("#food-template").html()
// const tamplate = Handlebars.compile(source)

// const newHtml = tamplate(foodType)
// $("#food").append(newHtml)




// const renderFirst = function(){
//   const source = $('#first-template').html();
//   const template = Handlebars.compile(source);
//   let newHTML = template({ text: "This gets rendered" });
//   $('body').append(newHTML);  
// }

// const renderSecond = function(){
//   const source = $('#second-template').html();
//   const template = Handlebars.compile(source);
//   let newHTML = template({ moreText: "This also gets rendered" });
//   $('#special').append(newHTML);  
// }

// renderFirst()
// renderSecond()





const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const animalsType = function () {
    const source = $(".animals").html()
    const template = Handlebars.compile(source)
    let newHTML = template({animals})
    $("#animals").append(newHTML)
}


const languagesType = function () {
    const source = $(".languages").html()
    const template = Handlebars.compile(source)
    let newHTML = template({languages})
    $("#languages").append(newHTML)
}

animalsType()
languagesType()









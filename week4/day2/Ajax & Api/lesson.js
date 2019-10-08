// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)//finding the first description of the first item 
//  })




// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
//    $("body").append(`<div>${lat}-${long}</div>`)

//   //log the data 
//   console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })


// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//  console.log(users[users.length-1].company.catchPhrase)
   

// })



// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function(data) {
//       console.log(data);
//     }
//   })




// $.ajax({
//     method:"GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: userData=function(data){
//         console.log(data)
//     }
// })



//ex1
const fetch= function(isbn){
$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
    success: function (data) {
        console.log(data);
    },
    error:  function (xhr, text, error) {
        console.log(text);
    }
}); 
}

fetch(9782806269171)

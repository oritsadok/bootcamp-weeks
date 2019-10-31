//ex1
// const fetch= function(isbn){
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
//     success: function (data) {
//         console.log(data);
//     },
//     error:  function (xhr, text, error) {
//         console.log(text);
//     }
// }); 
// }

// fetch(9782806269171)


//ex2


// const fetch= function(queryType,queryValue){
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+":"+queryValue,
//     success: function (data) {
//         console.log(data);
//     },
//     error:  function (xhr, text, error) {
//         console.log(text);
//     }
// }); 
// }

// fetch("title","How to Win Friends and influence people")




//ex3

// const fetch= function(queryType,queryValue){
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+":"+queryValue,
//     success: function (data) {
//        const info =  data.items
//    let Fdata =  info.map(i=>{return{title:i.volumeInfo.title,
//         authors:i.volumeInfo.authors
//         ,isbn:i.volumeInfo.industryIdentifiers[0].identifier}})

//        console.log(Fdata);
//     },
//     error:  function (xhr, text, error) {
//         console.log(text);
//     }
// }); 
// }

// fetch("title","How to Win Friends and influence people")



// const fetch= function (queryType,queryValue) {

//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+":"+queryValue,
//         success: function (data) {
//            data.items.forEach(d=>console.log(d.volumeInfo.title
//              +d.volumeInfo.authors[0]
//              +d.volumeInfo.industryIdentifiers[0].type));
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     });
// }


// fetch("title", "How to Win Friends and Influence People")

//ex4
// const fetch= function(){
// $.ajax({
//     method:"GET",
//     url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=miXO68AAl81ztbX1K4hZXcvwM80Sfz2w",
//      success: function (Data) {
//          let Gdata = Data.data[0].url
//         $("body").append(`<iframe src=`+Gdata+ `>`+`</iframe>`)
//          console.log(Gdata);
//      },
//     error:  function (xhr, text, error) {
//          console.log(text);

//  }
// }); 
// }

// fetch()


//ex5

// $("body").append("<input ></input>")
// $("body").append("<button>click me</button>")

// const fetch = function (subject) {
//     $.ajax({
//         method: "GET",
//         url: "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=miXO68AAl81ztbX1K4hZXcvwM80Sfz2w",
//         success: function (Data) {
//             let Gdata = Data.data[0].url
//             $("body").append(`<iframe src=` + Gdata + `>` + `</iframe>`)
//             console.log(Gdata);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);

//         }
//     });
// }

// $("button").on("click", function(){
//     let momo = $("input").val()
//     fetch(momo)
// })














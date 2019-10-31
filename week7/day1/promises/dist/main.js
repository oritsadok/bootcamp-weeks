





//client side (we want to avoid this way)
// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })
// 

// $.ajax({
//     method: "GET",
//     url: "/randomWord",
//     sucess: function (word) {
//         $.ajax({
//             method: "GET",
//             url: `/synonyms/${word}`,
//             success: function (synonyms) {
//                 $.ajax({
//                     method: "GET",
//                     url: `sentiment/${word}`,
//                     sucess: function (response) {
//                         console.log(`
//                         The word ${word} has a 
//                         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//                         its synonyms are: ${synonyms}`)
//                     },
//                     error: function (err) {
//                         console.log(err)
//                     }
//                 })
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err)
//     }
// })


// let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// console.log(p.state())
// console.log(p)



// $.get('/randomWord')
//     .then(function (word) {
//         console.log(word)
//     })

//  $.get('/sentiment/Ploy').then(function(response){
//     console.log(response)
//  })


//  $.get('/randomWord') //get req to randomWord
//     .then(function (word) {
//         return $.get(`/synonyms/${word}`) // returning the promise of the next request.
//     })
//     .then(function (synonyms) {//the synonyms for the random word we got from the first GET request.
//         console.log(synonyms)
//     })


   // $.get('/randomWord')
    // .then(function (word) {
    //     return $.get(`/synonyms/${word}`)
    // })
    // .catch(function (error) { console.log(error) })
    // .then(function (synonyms) {
    //     console.log(synonyms)
    // })
    // .catch(function (error) { console.log(error) })



    // $.get('/randomWord')//Make a request (async code) to /randomWord
    // .then(function (word) {//access to the word we need inside the then's callback
    //     let synonymsPromise = $.get(`/synonyms/${word}`)
    //     let sentimentPromise = $.get(`/sentiment/${word}`)//We store both the /synonyms and /sentiment promises inside of variables
    //     Promise.all([synonymsPromise, sentimentPromise])//We use Promise.all([...]) to tell JS to resolve all the promises in the array before executing the next then
    //         .then(function (results) { //we get results which is an array of all our resolved values
    //             console.log(results)
    //         })
    // })



    const printResults = function (word, synonyms, sentiment) {
    console.log(`
        The word ${word} has a 
        ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
        its synonyms are: ${synonyms}`
    )
}

$.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/synonyms/${word}`)
        let sentimentPromise = $.get(`/sentiment/${word}`)
        Promise.all([synonymsPromise, sentimentPromise])
            .then(function (results) {
                printResults(word, results[0], results[1])
            })
    })




    class APIManager {
    fetch() {
        return $.get('/data')
    }
}

class Renderer {
    render(dataPromise) {
        dataPromise.then(function (data) {
            $("#body").append(`<div>${data}</div>`)
        })
    }
}

const apiManager = new APIManager()
const renderer = new Renderer()

let initialDataPromise = apiManager.fetch()
renderer.render(initialDataPromise) //initial page load

$(".some-thing").on("click", function () {
    let newDataPromise = apiManager.fetch()
    renderer.render(newDataPromise)
})

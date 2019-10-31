// let timeNow = new Date()
// console.log(timeNow)


// const moment = require('moment')

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) 


const request = require('request')

// request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
//     console.log(response)
// })

request("http://www.omdbapi.com/?apikey=16afc7d1&t=the_lion_king", function(err,response){
    if(err) {
        console.log("Erorr: " + err)
    }
    else {
        var x = JSON.parse( response.body)
        console.log(x.Released)
    }
})


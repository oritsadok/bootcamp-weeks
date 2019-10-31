// const http = require('http')

// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })//sending metadata about the response
//     //200 means "every thing is ok" and{} tells whoever made the request what kind of data it will receive in return
//     response.write("Hello, I'm ori")//actually "writes" something to display to whoever makes the request
//     response.end();//closes this request-response cycle
// })

// const port = 3000
// server.listen(port, function () {//listen is start the server
//     console.log(`Node server created at port ${port}`)
// })



// const express = require('express')
//  const app = express()

// // app.get('/', function (request, response) {//When someone makes a GET request to "app"(server), invoke this callback function with these two parameters 
// // console.log("Someone has come into the server. Brace yourselves.")
// // response.send("Ending the cycle, thanks for visiting")
// // })




// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })

// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })


// const port = 3000
// app.listen(port, function(){
//     console.log(`Running server on port ${port}`)
// })






const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '..','dist')))//serving files
app.use(express.static(path.join(__dirname, '..','node_modules')))//serving files

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/landing/:username', function (request, response) { //serving data
     response.send(`Hi there, ${request.params.username}`)
})





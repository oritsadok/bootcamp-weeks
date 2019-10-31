const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const ComputerSchema = new Schema({
maker:String,
price:Number
})

let computer = mongoose.model('computer',ComputerSchema)

let c1 = new computer({maker:"ori",price:10000})
let c2 = new computer({maker:"dudi",price:12000})

const myComputers =[c1,c2]
myComputers.forEach(m=>m.save())



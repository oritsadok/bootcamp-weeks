const express = require('express')
const router = express.Router()
const Person = require('../models/Person')




router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person',function(req,res){
    
       const p = new Person(req.body)
        p.save()
        res.end()
})

router.put('/person/:id',function(req,res) {
    let id = req.params.id
     Person.findByIdAndUpdate(id,{age:80},{ new: true }, function (err, person) {
     res.end()
})
})

router.delete('/apocalypse',function (req,res) {
    Person.remove({},function(err){
        res.end()
    })
})
module.exports = router

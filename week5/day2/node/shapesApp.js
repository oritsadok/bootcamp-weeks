const circleUtilities = require('./circleUtils') // were import now an object with the keys that we want to export from the required file

const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)//now we use a plain dot notation to access the calcCircleArea method from the circleUtilities object.
//^prints "The area of a circle with radius 4 is 50.26544"



const dbName = "SQL_DB_1102"
const dbPassword = "e3!accT"

module.exports = {
    dbName: dbName,
    dbPassword: dbPassword
}
//we can use this form to export an objects like this











// const pushPull = function(func){
//     func()
// }


// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"



//ex2
 
// const getTime = function(func){
//  const date=new Date()
//  func(date)
// }

// const returnTime = function (time) {
//   alert('The current time is: ' + time)
// }

// getTime(returnTime)
//i create a func called "getTime" that takes a func as a parameter
//and then it called this func
//and the parmeter that i gave it is now whats going to the argument
//of "returntime" func 



//ex3


// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData  = function(){
//     console.log("what i like?")
// }

// displayData(alert,logData , "I like to party")



//ex4


// const nums = (x,y,z) => x+y+z 
// const sum =nums(1,2,3)
// console.log(sum)



//ex5

// const capitalize = name => name[0].toUpperCase()+name.slice(1)

// console.log(capitalize("bOb"))
// console.log(capitalize("TAYLOR")) 
// console.log(capitalize("feliSHIA")) 



//ex6

// const determineWeather = temp => {
//   if(temp > 25){
//     return "hot"
//   }
//    return "cold"

// }
// const commentOnWeather = num =>  ("its "+determineWeather(num))

// console.log(commentOnWeather(30) )//returns "It's hot"
// console.log(commentOnWeather(22) )//returns "It's cold"



//ex7

const explode = (lightFunc,soundFunc,sound) =>{
    lightFunc()
    soundFunc(sound)
}

const shineLight = ()=>  document.getElementById("box").style.background="yellow"
const makeSound =(sound) =>alert(sound)

explode(shineLight,makeSound,"boom")



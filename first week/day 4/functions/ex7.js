const increaseByNameLength = function (name, money) {
    let nameLength = name.length
    let sum = money * nameLength 
    return sum
}
const makeRegal = function (name) {
    return "his royal highness " + name
}
const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"





let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
const whenBuy = "how long ago?"

if (boughtTesla && isUSCitizen) {
    console.log(whenBuy)

    if (currentYear - yearOfTeslaPurchase > 4) {
        console.log("want to upgrade?")
    }

    else {
        console.log("are you satisfied?")
    }
}
else if (boughtTesla) {
    console.log("want to move to the u.s?")
}
else if (!boughtTesla) {
    ("would you like to buy a tesla?")
}
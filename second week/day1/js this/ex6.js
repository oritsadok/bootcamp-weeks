const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        for (let i  of this.drinkRequirements) {
            if (drinkType === this.drinkRequirements[i]) {

            }
            else {
                console.log("Sorry, we don't make ")
            }
            //   if(this.beans - this.drinkRequirements[i])
        }
        if (this.beans - drinkType <= 0) {
            console.log("Sorry, we're all out of beans!")

        }
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"






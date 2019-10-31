class LuxuryFeeder {
    // getFood(animalType) {
    //     if (animalType == "lion") {
    //         return "chia seeds"
    //     }
    //     if (animalType == "elephant") {
    //         return "peanuts"
    //     }

    //     return "scraps"
    // }
}

class CheapFeeder {
    // getFood(animalType) {
    //     return "scraps"
    // }
}


const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = false

let relevantFeeder = function () {
    if (weArePoor) {
        relevantFeeder = cheapFeeder
    }
    else {
        relevantFeeder = luxuryFeeder
    }

}
class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    getFood(feeder) {
        if (feeder == "lion") {
            return "chia seeds"
        }
        if (feeder == "elephant") {
            return "peanuts"
        }
        
        return "scraps"
    }
                eat() {
                    const food = this.feeder.getFood(this.type)
                    this._consume(food)
                }
}



const simba = new Animal("simba","lion",relevantFeeder)

console.log(simba.eat())






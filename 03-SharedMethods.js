const heroMethods = {
    scheme(amount) {
        console.log(`${this.name} is Scheming.`)
        this.power += amount
    },      
    regroup(length) {
        console.log(`${this.name} is Regrouping.`)
        this.power += length
    },      
    saveTheDay(length) {
        console.log(`${this.name} is Saving the Day.`)
        this.power -= length
    },
}

function Hero (name, power) {
    let hero = {}
    hero.name = name
    hero.energy = power
    hero.eat = heroMethods.scheme
    hero.sleep = heroMethods.regroup
    hero.play = heroMethods.saveTheDay

    return hero
}
  
const supes = Hero('Superman', 7)
const batsy = Hero('Batman', 10)

// unite(ally){
//     console.log(`${this.name} unites with ${ally.name}`)
//     this.power -= ally.power
// }
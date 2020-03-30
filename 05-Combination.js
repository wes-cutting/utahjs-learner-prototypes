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
    unite(ally){
        console.log(`${this.name} unites with ${ally.name}`)
        this.power -= ally.power
    }
}
  
function Hero (name, power) {
    let hero =  Object.create(heroMethods)
    hero.name = name
    hero.power = power

    return hero
}
  
const supes = Hero('Superman', 7)
const batsy = Hero('Batman', 10)

supes.scheme(10)
batsy.saveTheDay(5)
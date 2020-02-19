function Hero (name, power) {
    let hero = Object.create(Hero.prototype)
    hero.name = name
    hero.energy = power

    return hero
}

Hero.prototype.scheme = function (amount) {
    console.log(`${this.name} is Scheming.`)
    this.power += amount
}     
Hero.prototype.regroup = function(length) {
    console.log(`${this.name} is Regrouping.`)
    this.power += length
}   
Hero.prototype.saveTheDay = function (length) {
    console.log(`${this.name} is Saving the Day.`)
    this.power -= length
}
Hero.prototype.unite = function (ally){
    console.log(`${this.name} unites with ${ally.name}`)
    this.power -= ally.power
}
  
const supes = Hero('Superman', 7)
const batsy = Hero('Batman', 10)
  
supes.scheme(10)
batsy.saveTheDay(5)


function Hero (name, power) {
  let hero = {}
  hero.name = name
  hero.power = power

  hero.scheme = function (amount) {
    console.log(`${this.name} is Scheming.`)
    this.power += amount
  }
  
  hero.regroup = function (length) {
    console.log(`${this.name} is Regrouping.`)
    this.power += length
  }
  
  hero.saveTheDay = function (length) {
    console.log(`${this.name} is Saving the Day.`)
    this.power -= length
  }

  return hero
}

const supes = Hero('Superman', 7)
const batsy = Hero('Batman', 10)
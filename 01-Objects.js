let hero = {}
hero.name = 'Batman'
hero.power = 10

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
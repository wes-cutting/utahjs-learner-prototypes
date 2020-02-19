const sugaryArray = []
const newArray = new Array()
console.log('__proto__ Check:', sugaryArray.__proto__ === newArray.__proto__)

class Hero {
    constructor(name, power) {
        this.name = name
        this.energy = power
    }   

    scheme (amount) {
        console.log(`${this.name} is Scheming.`)
        this.power += amount
    }     
    regroup (length) {
        console.log(`${this.name} is Regrouping.`)
        this.power += length
    }   
    saveTheDay (length) {
        console.log(`${this.name} is Saving the Day.`)
        this.power -= length
    }
    unite (ally){
        console.log(`${this.name} unites with ${ally.name}`)
        this.power -= ally.power
    }
}

const batsy = new Hero('Batman', 10)

console.log('Class Keys')
for(let key in batsy) {
    console.log(`Key: ${key}. Value: ${batsy[key]}`)
}

function Hero (name, power) {
    this.name = name
    this.energy = power
}

Hero.prototype.scheme = function (amount) {
    console.log(`${this.name} is Scheming.`)
    this.power += amount
}     
Hero.prototype.regroup = function (length) {
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
  
console.log('Class Keys')
for(let key in batsy) {
    console.log(`Key: ${key}. Value: ${batsy[key]}`)
}



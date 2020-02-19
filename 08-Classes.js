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
  
const supes = new Hero('Superman', 7)
const batsy = new Hero('Batman', 10)
  
supes.scheme(10)
batsy.saveTheDay(5)


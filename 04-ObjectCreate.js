const hero = {
    name: 'Batman',
    age: 35,
    heritage: 'Gothamite'
}

const sideKick = Object.create( hero)
const sideKick2 = Object.assign( {}, hero)
sideKick.name = 'Robin'
sideKick.age = 9
hero.heritage = 'Magic'

console.log(sideKick.name) // Robin
console.log(sideKick.age) // 9
console.log(hero.name) // Batman
console.log(sideKick.heritage) // Magic
console.log(sideKick2.heritage) // Gothamite
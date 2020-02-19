const hero = {
    name: 'Batman',
    age: 35,
    heritage: 'Gothamite'
  }
  
  const sideKick = Object.create(hero)
  sideKick.name = 'Robin'
  sideKick.age = 9
  
  console.log(sideKick.name) // Robin
  console.log(sideKick.age) // 9
  console.log(sideKick.heritage) // Gothamite
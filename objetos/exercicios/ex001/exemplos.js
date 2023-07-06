let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Battle"
}
console.log(spaceship)

console.log(spaceship.name)
console.log(spaceship.crewQuantity)
console.log(spaceship.type)

spaceship.isHitched = false
spaceship["shieldLevel"] = 100 // Tambem pode acessar objetos com colchetes
console.log(spaceship)

// --------------------------------------------------------------------------------------
let spacialStation = new Object()
spacialStation.name = "Global"
console.log(spacialStation.name)

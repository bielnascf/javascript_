let spacialStation = {
    name: "Fox",
    platformQuantity: 10,
    shape: "Esférica"
}
console.log(spacialStation.name.toUpperCase())

// --------------------------------------------------------------------------------------
let spaceshipNames = ["Golias", "Fenix", "Helmet"]
console.log(spaceshipNames[0].toUpperCase())

// --------------------------------------------------------------------------------------
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Fernando", "Thiago"]
}
console.log(spaceship)
spaceship.crew.push("Ten. Gabriel")
console.log(spaceship)

// --------------------------------------------------------------------------------------
let spaceships = [
{name: "Elemental", crewQuantity: 7},
{name: "Supernova", crewQuantity: 4},
{name: "Helmet", crewQuantity: 5}
]
spaceships.forEach(spaceship => {
console.log(`${spaceship.name} tem ${spaceship.crewQuantity} tripulantes.`)
})

// --------------------------------------------------------------------------------------
let spaceship = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 53
    }
}

console.log(spaceship.captain.name)
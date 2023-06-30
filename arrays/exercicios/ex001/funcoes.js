let hitchedSpaceship = ["Supernova", "Helmet", "Estelar"]

console.log(hitchedSpaceship)

// ------------------------------------------------------------------

let spaceshipInfo = ["Colossus", 7, true]

console.log(spaceshipInfo)

// ------------------------------------------------------------------

let getNumbers = new Array(5)

console.log(getNumbers)

// ------------------------------------------------------------------

let hitchedSpaceships = ["Supernova", "Estelar", "Helmet"]
console.log(hitchedSpaceships)

hitchedSpaceships.push("Colossus")
console.log(hitchedSpaceships)

let removedLastSpaceship = hitchedSpaceships.pop()
let removedFirstSpaceship = hitchedSpaceships.shift()
console.log(hitchedSpaceships)
console.log(removedLastSpaceship)
console.log(removedFirstSpaceship)

hitchedSpaceships.unshift("Fenix")
console.log(hitchedSpaceships)

let spaceships = hitchedSpaceships.length
console.log(spaceships)

let estelarPosition = hitchedSpaceships.indexOf("Estelar")
console.log(estelarPosition)

// ------------------------------------------------------------------
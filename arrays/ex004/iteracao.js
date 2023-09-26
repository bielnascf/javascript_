let hitchedSpaceships = ["Deméter", "Estelar", "Golias", "Darwin", "Supernova"]

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log(`Nave: ${currentSpaceship} \nÍndice: ${index}`)
})

// -----------------------------------------------------------------------------------

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
    return currentSpaceship.toUpperCase()
})
console.log(upcasedSpaceships)

// -----------------------------------------------------------------------------------

let width7Chars = hitchedSpaceships.filter(element => {return element.length >= 7})
console.log(width7Chars)

// -----------------------------------------------------------------------------------

width7Chars = hitchedSpaceships.find(element => {return element.length >= 7})
console.log(width7Chars)

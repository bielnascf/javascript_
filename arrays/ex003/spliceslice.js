let spaceshipNamesSplice = ["Estelar", "Supernova", "Golias", "Dimitri", "Helmet"]
console.log(spaceshipNamesSplice)

spaceshipNamesSplice.splice(1,2)
console.log(spaceshipNamesSplice)

let spaceshipNamesSplice2 = ["Estelar", "Supernova", "Golias", "Dimitri", "Helmet"]
console.log(spaceshipNamesSplice2)

spaceshipNamesSplice2.splice(1,2, "Eleonor", "Vasco")
console.log(spaceshipNamesSplice2)

// --------------------------------------------------------------------------------------

let spaceshipNamesSlice = ["Botafogo", "Flamengo", "Vasco", "Fluminense"]
let extractedNames = spaceshipNamesSlice.slice(0,2)
console.log(extractedNames)
console.log(spaceshipNamesSlice)
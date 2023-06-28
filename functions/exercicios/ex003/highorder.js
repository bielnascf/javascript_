function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity) // High Order Function
    return newVelocity
}

    let printVelocity = (velocity) => {
        console.log(`Nova velocidade: ${velocity} km/s.`)
}

    let newVelocity = doubleVelocity(60, printVelocity) // High Order Function
        console.log(newVelocity)

    let anotherVelocity = doubleVelocity(50, (velocity) => { // High Order Function
        console.log(`Outra Velocidade: ${velocity} km/s.`)
})

    console.log(anotherVelocity)

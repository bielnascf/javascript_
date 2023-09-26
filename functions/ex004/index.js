function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave Parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, (velocity) => {
    alert(`Velocidade atual: ${velocity} km/s.`)
})


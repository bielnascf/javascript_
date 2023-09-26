function greetPilot() {
    alert("Bom dia, Piloto!")
}

greetPilot()
// ----------------------------------------------------------------

function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(`Nova velocidade: ${newVelocity} km/s`)
}

speedUp(60,10)

speedUp(40,20)

speedUp(70,5)
// -----------------------------------------------------------------

function greetPilot(name, message = "Olá") {
    alert(`${message}, ${name}!`)
}

greetPilot("Gabriel", "Seja bem-vindo")
// -----------------------------------------------------------------

function speedUp(velocity, acceleration, unit = "km/s") {
    let newVelocity = velocity + acceleration
    alert(`Nova Velocidade: ${newVelocity} ${unit}.`)
}

speedUp(50, 5, "m/s")
// ------------------------------------------------------------------


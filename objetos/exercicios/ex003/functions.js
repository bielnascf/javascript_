let spaceship = {
    name: "Golias",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        alert("Preparando os propulsores")
        alert("Ligando computador de bordo")
    }
}
spaceship.turnOn()
spaceship.velocity = 0

console.log(spaceship)

spaceship.speedUp = function(acceleration) {
this.velocity += acceleration
}
spaceship.speedUp(10)

console.log(spaceship)
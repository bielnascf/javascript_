class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
    }
    speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!\nDiminua a velocidade ou sofrerá danos na nave.")
    }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
    alert("Naves de transporte só podem se locomover de 1 em 1km/s.")
    this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 13, 100)

console.log(transportSpaceship)

transportSpaceship.speedUp()
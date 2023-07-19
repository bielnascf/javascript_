class Spaceship {
    constructor(name, maxCrew, maxRecommendedValue) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedValue = maxRecommendedValue
    this.currentVelocity = 0
    }
    speedUp(acceleration) {
    this.currentVelocity += acceleration
    if(this.currentVelocity > this.maxRecommendedValue) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!")
    }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedValue)
    this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration) {
    acceleration /= 2
    alert(`Incrementando velocidade em ${acceleration} km/s.`)
    super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)

console.log(transportSpaceship)
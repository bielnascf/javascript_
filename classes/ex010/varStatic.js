class Spaceship {
    static get decelerationRate() { // metodo get estatico tranformando em uma variável estática
        return 0.15
    }
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }
    
    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate)) // ---> metodos get podem ser acionados como variáveis
    }
}

let spaceship = new Spaceship("Apollo")
spaceship.speedUp(100)
console.log(spaceship)
class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportadora")
spaceship.velocity = 90
console.log(spaceship)

// Método utilizado para alterar informações/atributos da classe/objeto requerido pelo usuário.
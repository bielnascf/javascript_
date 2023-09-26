class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    } 
}

let supernova = new Spaceship("Supernova")
console.log(supernova)

supernova.speedUp(10)
supernova.speedUp(20)
console.log(supernova)
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
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá sofrer danos na nave!")
    }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
    this.currentVelocity = 0
    alert("Recolhendo as armas e parando a nave de Batalha.")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
    this.currentVelocity = 0
    alert("Desligando sensores exploratórios e parando nave de Descoberta.")
    }
}

let darwin = new BattleSpaceship("Darwin", 15, 100)
let ivonei = new DiscoverySpaceship("Ivonei", 11, 250)

console.log(darwin)
console.log(ivonei)

darwin.speedUp(150)
ivonei.speedUp(200)

console.log(darwin)
console.log(ivonei)

darwin.stop()
ivonei.stop()
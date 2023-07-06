
let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceshipData() {
    spaceship.name = prompt("Digite o nome da sua nave: ")
    spaceship.type = prompt("Digite o tipo da sua nave: ")
    spaceship.maxVelocity = Number(prompt("Digite a velocidade máxima da sua nave (km/s): "))
}

function acelerate () {
    let acceleration = Number(prompt("Quanto você deseja acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(`Velocidade máxima ultrapassada. \nVelocidade atual da nave: ${spaceship.velocity} km/s. \nVelocidade Máxima da nave: ${spaceship.maxVelocity} km/s.`)
    }
}

function stopSpaceship() {
    alert(`Iniciando processo de paralisação da nave ${spaceship.name} do tipo ${spaceship.type} com velocidade atual ${spaceship.velocity} km/s.`)
    spaceship.velocity = 0
}

function showSpaceshipData() {
    alert(`NOME DA NAVE: ${spaceship.name.toUpperCase()}\nTIPO DA NAVE: ${spaceship.type.toUpperCase()}\nVELOCIDADE ATUAL: ${spaceship.velocity} km/s\nVELOCIDADE MÁXIMA DA NAVE: ${spaceship.maxVelocity} km/s`)
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = Number(prompt("Você deseja\n[1] Acelerar\n[2] Parar\n[3] Mostrar informações da nave"))
        switch(chosenOption) {
            case 1:
                acelerate()
                break
            case 2:
                stopSpaceship()
                break
            case 3:
                showSpaceshipData()
                break
            default:
                alert("Opção inválida.")
        }
    } while(chosenOption != 2)
}

registerSpaceshipData()
showMenu()
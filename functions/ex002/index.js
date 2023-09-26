let spaceship = prompt("Digite o nome da nave:")
while(spaceship.length == 0) {
    spaceship = prompt("Esse espaço não pode ficar em branco. Digite o nome da nave: ")
}

let velocity = 0

let acceleration = 5 

let chosenOption = ""

menu()


function menu() {
    while(chosenOption <= 4 || chosenOption >=1) {
        chosenOption = prompt("O que você deseja fazer? \n1- Acelerar a Nave em 5 km/s \n2- Desacelerar a Nave em 5 km/s \n3- Imprimir os dados da nave \n4- Sair do Programa")
    
        if(chosenOption == 1) {
            velocity = Number(speedUp())
            alert(`Acelerando para ${velocity} km/s`)
        } else if(chosenOption == 2) {
            if(velocity > 0) {
                velocity = Number(slowDown())
                alert(`Desacelerando para ${velocity} km/s`)
            } else {
                alert("Velocidade menor que 0 não é permitida.")
            }
        } else if(chosenOption == 3) {
            spaceshipData()
        } else if(chosenOption == 4) {
            alert("Saindo do Programa...")
            break
        }
    }
}

function speedUp() {
    velocity += acceleration
    return velocity
}

function slowDown() {
    velocity -= acceleration
    return velocity
}

function spaceshipData() {
    alert(`Dados atualizados da nave \nNome da nave: ${spaceship} \nVelocidade atual: ${velocity} km/s`)
}


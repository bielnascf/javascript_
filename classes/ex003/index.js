class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.doorOpened = false
        this.isHitched = false
    }
    hitch() {
        this.isHitched = true
        this.doorOpened = true
    }
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = Number(prompt("O que você deseja fazer?\n1- Realizar Engate\n2- Imprimir Naves\n3- Sair do Programa"))
        switch(chosenOption) {
            case 1:
                hitchSpaceship()
                break
            case 2:
                printSpaceshipList(hitchedSpaceships)
                break
            case 3:
                alert("Saindo do Progama...")
                break
            default:
                alert("Opção inválida.")
        }
    } while(chosenOption != 3)
}

let hitchedSpaceships = []

function hitchSpaceship() {
    let spaceshipToAdd = createSpaceship()
    spaceshipToAdd.hitch()
    hitchedSpaceships.push(spaceshipToAdd)
    
}

function createSpaceship() {
    let spaceshipName = prompt("Insira o nome da nave: ")
    let crewQuantity = Number(prompt("Insira a quantidade de tripulantes: "))
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}


showMenu()
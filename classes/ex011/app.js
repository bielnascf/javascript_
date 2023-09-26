class App {
    constructor() {
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        console.log("Ola")
        let spaceshipName = prompt("Digite o nome da nave: ")
        let crewQuantity = prompt("Digite a quantidade de tripulantes: ")
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind == "1") {
            let weaponsQuantity = prompt("Digite a quantidade de armas da sua nave de batalha: ")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("Digite a quantidade de lugares da sua nave de transporte: ")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind() {
        let chosenOption
        while(!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("Digite o tipo da sua nave\n1- Nave de Batalha\n2- Nave de Transporte")
        }
        return chosenOption
    }

    showInitialMenu() {
        const promptMessage = "O que você deseja fazer?\n1- Acelerar a Nave\n2-Trocar a Nave\n3- Imprimir e Sair"
        let chosenOption = prompt(promptMessage)
        while(!["1", "2","3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption) {
        switch(chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage = `Nome: ${this.spaceship.name}\nQuantidade de Tripulantes: ${this.spaceship.crewQuantity}\nVelocidade Atual: ${this.spaceship.currentVelocity}`
        alert(finalMessage)
    }
}
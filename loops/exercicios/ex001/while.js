let spaceShip = prompt("Qual é o nome da nave?");

let warpCount = 0;

let chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não");
if(chosenOption == "2") {
    alert(`Contagem Encerrada.`);
}

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar uma próxima dobra espacial?\n1- Sim\n2- Não");
    if(chosenOption == "2") {
        alert(`Contagem Encerrada.`);
    }
}

alert(`Nome da nave: ${spaceShip}.\nNúmero de dobras espaciais: ${warpCount}.`);

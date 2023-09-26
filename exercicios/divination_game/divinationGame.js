let browserNumber;
let userNumber;
let attempts = 0;

alert('Bem vindo ao jogo da adivinhação!')

while(true) {
    browserNumber = Math.round((Math.random() * 10))
    userNumber = prompt('Adivinhe o número que estou pensando... Está entre 0 e 10')
    attempts++
    if(Number(userNumber) == browserNumber) {
        alert(`Parabéns! Você acertou em ${attempts} tentativas.`)
        break
    }
    let option = prompt('Você errou! Tentar novamente?\n1- Sim\n2-Não')
    if(option == '2') {
        alert('Saindo...')
        break
    }
}
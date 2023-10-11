const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const tryNumberButton = document.querySelector('#tryNumberButton')
const tryAgainButton = document.querySelector('#tryAgainButton')

let browserNumber = Math.round((Math.random() * 10))
let attempts = 1

tryNumberButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const userNumber = document.querySelector('#userNumber')
    if(Number(userNumber.value) == browserNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')

        let winPhrase = document.querySelector('h2')

        winPhrase.innerText = `Você acertou em ${attempts} tentativas!`
    }

    userNumber.value = ''

    attempts++
})

tryAgainButton.addEventListener('click', () => {
    screen2.classList.add('hide')
    screen1.classList.remove('hide')

    attempts = 1
    browserNumber = Math.round((Math.random() * 10))
})
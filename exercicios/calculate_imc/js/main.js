import { Modal } from './modal.js'
import { AlertError } from './alertError.js'
import { rankImc, notNumber} from './utils.js'

const inputWeight = document.querySelector('#peso')
const inputHeight = document.querySelector('#altura')

const calculateButton = document.querySelector('#calculateButton')


calculateButton.addEventListener('click', (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.show()
        return;
    }

    AlertError.hide()

    let imc = (Number(weight) / (Number(height)/ 100)**2).toFixed(1)
    Modal.open()

    const message = `Seu IMC é de ${imc}`
    Modal.text.innerText = message

    rankImc(imc)
})

inputWeight.addEventListener('input', () => {
    AlertError.hide()
})

inputHeight.addEventListener('input', () => {
    AlertError.hide()
})


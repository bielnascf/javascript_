export function notNumber(value) {
    return isNaN(value) || value == ''
}

export function rankImc(imc) {
    if(imc < 18.5) {
        Modal.rank.innerText = 'Baixo Peso'
        Modal.rank.style.color = '#ffff00'
    } else if(imc >= 18.5 && imc < 24.9) {
        Modal.rank.innerText = 'Peso Normal'
        Modal.rank.style.color = '#008000'
    } else if(imc >= 24.9 && imc < 29.9) {
        Modal.rank.innerText = 'Sobrepeso'
        Modal.rank.style.color = '#FF844F'
    } else if(imc >= 29.9 && imc < 34.9) {
        Modal.rank.innerText = 'Obesidade grau 1'
        Modal.rank.style.color = '#E55549'
    } else if(imc >= 34.9 && imc < 39.9) {
        Modal.rank.innerText = 'Obesidade grau 2'
        Modal.rank.style.color = '#E53D38'
    } else if(imc >= 39.9) {
        Modal.rank.innerText = 'Obesidade grau 3'
        Modal.rank.style.color = '#E60101'
    }

}
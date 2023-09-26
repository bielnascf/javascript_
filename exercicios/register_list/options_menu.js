let names = []
let chosenOption

alert('Bem vindo ao menu de cadastro!')

while(chosenOption != 4) {

    chosenOption = Number(prompt(
`O que você deseja fazer?
    1- Cadastrar um nome
    2- Deletar um nome
    3 - Mostrar os nomes cadastrados
    4- Sair do programa`))

    switch(chosenOption) {
        case 1:
            registerName()
            break
        case 2:
            deleteName()
            break
        case 3:
            showNames()
            break
        case 4:
            alert('Saindo do programa...')
            break
        default:
            alert('Opção inválida. Tente novamente.')
    }
    
}

function registerName() {
    let name = prompt('Digite o nome que você deseja adicionar na lista.').toUpperCase()
    if(names.includes(name)) {
        alert('Nome já registrado.')
    } else {
        names.push(name)
        alert(`${name} adicionado com sucesso.`)
    }
}

function deleteName() {
    let name = prompt('Digite o nome que você deseja remover da lista.').toUpperCase()
    if(!names.includes(name)) {
        alert('Nome não encontrado')
    } else {
        names.splice(names.indexOf(name), 1)
        alert(`${name} removido com sucesso.`)
    }
}

function showNames() {
    if(names.length == 0) {
        alert('Nenhum nome foi adicionado.')
    } else {
        alert(`Lista atualizada : ${names}`)
    }
}


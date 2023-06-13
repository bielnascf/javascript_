alert("Bem vindo! A seguir pediremos que informe seus dados.");
const name = prompt("Digite o seu nome: ");
let age = prompt("Digite a sua idade: ");
let ageConfirm = confirm("Tem certeza que essa é a sua idade?")
let confirmation = ""

if(ageConfirm == true) {
    confirmation = "confirmada"
} else {
    confirmation = "não confirmada."
}

alert(`Dados do usuário: 
Nome: ${name}
Idade: ${age} anos
Idade ${confirmation}.`)

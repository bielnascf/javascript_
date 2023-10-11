const patients = [
    {
        name: 'Gabriel',
        age: 21,
        weight: 98.5,
        heigh: 180
    },
    {
        name: 'Pedro',
        age: 20,
        weight: 101,
        heigh: 169
    },
    {
        name: 'João',
        age: 21,
        weight: 73,
        heigh: 165
    }
]

let patientNames = []
let patientAges = []
let patientWeights = []
let patientHeighs = []
let option

for(let patient of patients) {
    patientNames.push(patient.name)
    patientAges.push(patient.age)
    patientWeights.push(patient.weight)
    patientHeighs.push(patient.heigh)
}

while (option != 6) {
    option = Number(prompt(`
1- Mostrar Lista de Nomes dos Pacientes 
2- Mostrar Lista de Idade dos Pacientes
3- Mostrar Lista de Peso dos Pacientes
4- Mostrar Lista de Altura dos Pacientes
5- Mostrar IMC dos Pacientes
6- Sair do Programa`))

    switch(option) {
        case 1:
            showNameList()
            break
        case 2:
            showAgeList()
            break
        case 3:
            showWeightList()
            break
        case 4:
            showHeighList()
            break
        case 5:
            showImc()
            break
        case 6:
            alert('Saindo do programa...')
            break
        default:
            alert('Opção inválida. Tente novamente.')
    }
}


function showNameList() {
    alert(patientNames)
}

function showAgeList() {
    alert(patientAges)
}

function showWeightList() {
    alert(patientWeights)
}

function showHeighList() {
    alert(patientHeighs)
}

function showImc() {
    for(let pos = 0; pos < patients.length; pos++) {
        alert(`O paciente ${patients[pos].name} tem o IMC ${(patients[pos].weight / ((patients[pos].heigh / 100) ** 2)).toFixed(2)}`)
    }
}

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

for(let patient of patients) {
    patientNames.push(patient.name)
    patientAges.push(patient.age)
    patientWeights.push(patient.weight)
    patientHeighs.push(patient.heigh)
}

alert(`
Lista de nomes: ${patientNames};
Lista de idades: ${patientAges};
Lista de pesos(kg): ${patientWeights};
Lista de Alturas(cm): ${patientHeighs};
`)


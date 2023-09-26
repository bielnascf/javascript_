const oldPersonName = prompt("Digite o nome da pessoa mais velha:");
let oldPersonAge = prompt("Digite a idade da pessoa mais velha:");
const newPersonName = prompt("Digite o nome da pessoa mais nova:");
let newPersonAge = prompt("Digite a idade da pessoa mais nova:");

let result = Number(oldPersonAge) - Number(newPersonAge);

alert(`${oldPersonName} tem ${oldPersonAge} anos.
${newPersonName} tem ${newPersonAge} anos.
A diferença de idade entre ${oldPersonName} e ${newPersonName} é ${result}anos.`);

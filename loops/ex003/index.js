let spaceship = prompt("Digite o nome da nave:")

let forbiddenChar = "e";

let newSpaceship = "";

for(let pos = spaceship.length - 1; pos >= 0; pos--) {
    if(spaceship[pos] == forbiddenChar) {
        break
    }
    newSpaceship += spaceship[pos]
} 

alert(`Nome Original da Nave: ${spaceship}\nNome após ocultação: ${newSpaceship}`)
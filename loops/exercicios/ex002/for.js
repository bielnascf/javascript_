let spaceship = prompt("Qual é o nome da nave?")

let caractere = prompt("Qual caractere do nome da nave você deseja substituir?");

let newCaractere = prompt(`Por qual caractere você deseja substituir o caractere ${caractere}?`);

let newSpaceship = "";

for(let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == caractere) {
        newSpaceship += newCaractere;
    } else {
        newSpaceship += spaceship[pos];
    }
}

alert(`O novo nome da nave é ${newSpaceship}.`);

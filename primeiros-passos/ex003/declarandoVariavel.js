var velocity = 80; // var -> Semelhante ao let, permite ter o seu valor modificado.
console.log(velocity);
velocity = 120;
console.log(velocity);


let spaceship = "FE Supernova" // let -> Variável que permite ter o seu valor modificado.
console.log(spaceship);
spaceship = "FE Helmet";
console.log(spaceship);

const squad = "Estelar"; // const -> Variável que não permite ter o seu valor modificado.
console.log(squad);
squad = "Lunar";
console.log(squad); // -> Erro!! Não modifica!

let noValue; // -> Uma variável sem um valor definido. 
console.log(noValue);

let departureConfirmation = confirm("Foguete pronto para a decolagem. Aguardando confirmação!"); // -> Dependendo da escolha do confirm (OK or cancel), retornará um valor true ou false para dentro da variável.
console.log(departureConfirmation);

let pilot = prompt("Qual o seu nome, piloto?"); // -> O valor da variável será o que for digitado no prompt.
console.log(pilot);
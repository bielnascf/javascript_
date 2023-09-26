alert("Bem vindo à nossa nave!");

let pilotName = prompt("Qual é o seu nome, piloto?");
while(pilotName.length == 0) {
    pilotName = prompt("Nosso sistema não permite deixar esse espaço em branco. Digite o seu nome");
}

let velocity = 0;

let newVelocity = prompt("Digite a velocidade desejada");

let confirmation = confirm(`O meu sistema consta que o piloto ${pilotName} deseja acelerar a nave de ${velocity} km/s para ${newVelocity} km/s. Está certo?`);

if(confirmation == true) {
    velocity = newVelocity
} else {
    alert("Atualização de velocidade negada. Encerrando as atividades.");
}

if(velocity <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
    alert(`Dados da viagem:\nNome do Piloto: ${pilotName}\nVelocidade atual da nave: 0 km/s`)
} else if(velocity < 40) {
        alert("Você está devagar, podemos aumentar mais.")
        alert(`Dados da viagem:\nNome do Piloto: ${pilotName}\nVelocidade atual da nave: ${velocity} km/s`)
    } else if(velocity < 80) {
            alert("Parece uma boa velocidade para manter.")
            alert(`Dados da viagem:\nNome do Piloto: ${pilotName}\nVelocidade atual da nave: ${velocity} km/s`)
        } else if(velocity < 100) {
                alert("Velocidade alta. Considere diminuir.")
                alert(`Dados da viagem:\nNome do Piloto: ${pilotName}\nVelocidade atual da nave: ${velocity} km/s`)
            } else if(velocity >= 100) {
                    alert("Velocidade muito alta e perigosa. Controle automático forçado ativado.")
                    alert(`Dados da viagem:\nNome do Piloto: ${pilotName}\nVelocidade atual da nave: ${velocity} km/s (CONTROLE AUTOMÁTICO)`)
                }

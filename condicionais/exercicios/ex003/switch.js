let lightYearDistance = prompt("Qual é o valor da distância em Anos-Luz?");

let conversorOption = prompt("Para qual valor você deseja converter? \n 1- Parsec (PC) \n 2- Unidade Astronômica (UA) \n 3- Quilômetros (KM)");

let chosenOption = Number(conversorOption);

switch(chosenOption) {
    case 1:
        let parsecResult = (lightYearDistance / 3.262);
        alert(`A distância ${lightYearDistance} anos-luz equivale a ${parsecResult} pc aproximadamente.`);
        break
    case 2:
        let astroUnityResult = (lightYearDistance * 63241.1);
        alert(`A distância ${lightYearDistance} anos-luz equivale a ${astroUnityResult} ua aproximadamente.`)
        break
    case 3:
        let kilometerResult = (lightYearDistance * (9.42 * (Math.pow(10,12))));
        alert(`A distância ${lightYearDistance} anos-luz equivale a ${kilometerResult} km aproximadamente.`);
        break
    default:
        alert(`Distância em anos-luz: ${lightYearDistance} anos-luz. \nUnidade de conversão não identificada.`);
}

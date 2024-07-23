// alert('Boas vindas ao jogo do número secreto');
// tentar();
// function tentar(){
// let numeroSecreto = 5;
// let chute = prompt('Escolha um número entre 1 e 10');
// if (numeroSecreto == chute){
// alert(`Voçê descobriu o número secreto ${numeroSecreto}`);
// }else{
//     alert('Você não acertou o número secreto.');
//     if(numeroSecreto > chute){
//         alert(`${chute} é menor que o número secreto`);
//         tentar();
//     }else{
//         alert(`${chute} é maior que o número secreto`);
//     tentar();
//         };
//     };
// };

alert('Boas vindas ao jogo do número secreto');
const maximo = 50;
let numeroSecreto = Math.floor(Math.random() * maximo)+1;
let chute = 0;
let tentativa = 1;
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número de 1 a ${maximo}.`);
    if(chute == numeroSecreto){
        break;
    }
    else {
        if(chute < numeroSecreto){
        alert(`O ${chute} é menor que o número secreto`);
    }else{
        alert(`O ${chute} é maior que o número secreto`);
    };
    tentativa++;
    };
};
let palavraTentativa = tentativa > 1? "tentativas" : "tentativa"
alert(`Parabéns! Você acertou com ${tentativa} ${palavraTentativa}.`);
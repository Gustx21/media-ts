"use strict";
const primeiraNota = Math.floor(Math.random() * 10);
const segundaNota = Math.floor(Math.random() * 10);
const terceiraNota = Math.floor(Math.random() * 10);
function media() {
    const total = (primeiraNota + segundaNota + terceiraNota) / 3;
    let nome;
    switch (true) {
        case total <= 1:
            logger("Pedro", total);
            break;
        case total <= 2 || total > 1:
            logger("Gustavo", total);
            break;
        case total <= 3 || total > 2:
            logger("Luiz", total);
            break;
        case total <= 4 || total > 3:
            logger("Ruan", total);
            break;
        case total <= 5 || total > 4:
            logger("Rian", total);
            break;
        case total <= 6 || total > 5:
            logger("Henrique", total);
            break;
        case total <= 7 || total > 6:
            logger("Lucas", total);
            break;
        case total <= 8 || total > 7:
            logger("Joao", total);
            break;
        case total <= 9 || total > 8:
            logger("Vitor", total);
            break;
        case total <= 10 || total > 9:
            logger("Bernado", total);
            break;
        default:
            break;
    }
}
function logger(nome, total) {
    if (total <= 6) {
        console.log(`Aluno: ${nome} está reprovado na final com nota ${total.toFixed(1)}.`);
        return;
    }
    console.log(`Aluno: ${nome} está aprovado na final com nota ${total.toFixed(1)}.`);
}
setTimeout(() => { media(); }, 1500);

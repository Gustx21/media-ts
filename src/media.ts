const primeiraNota: number = Math.floor(Math.random() * 10);
const segundaNota: number = Math.floor(Math.random() * 10);
const terceiraNota: number = Math.floor(Math.random() * 10);

function media(): void {
    const total: number = (primeiraNota + segundaNota + terceiraNota) / 3;
    let nome: string;

    switch (true) {
        case total <= 1:
            logger("Pedro", total);
            break;
        case total <= 2:
            logger("Gustavo", total);
            break;
        case total <= 3:
            logger("Luiz", total);
            break;
        case total <= 4:
            logger("Ruan", total);
            break;
        case total <= 5:
            logger("Rian", total);
            break;
        case total <= 6:
            logger("Henrique", total);
            break;
        case total <= 7:
            logger("Lucas", total);
            break;
        case total <= 8:
            logger("Joao", total);
            break;
        case total <= 9:
            logger("Vitor", total);
            break;
            case total <= 10:
            logger("Bernado", total);
            break;
        default:
            break;
    }
}

function logger(nome: string, total: number): void {
    if (total <= 6) {
        console.log(`Aluno: ${nome} está reprovado na final com nota ${total.toFixed(1)}.`);
        return;
    }

    console.log(`Aluno: ${nome} está aprovado na final com nota ${total.toFixed(1)}.`);
}

setTimeout(() => { media() }, 1500);
const prompt = require('prompt-sync')();

function printAutonomousMenu() {
    console.log("");
    console.log("1 - Lista de serviços");
    console.log("2 - Encontrar candidato");
    console.log("3 - Login/Criar conta");
    console.log("4 - Voltar");
}

function printAutonomousServiceList() {
    console.log("Lista de serviços");
    console.log("");
    console.log("Baba");
    console.log("Professor(a) particular");
    console.log("Cuidador(a) de pets");
    console.log("Eletricista");
    console.log("Faxina");
    console.log("...");
}

function printAutonomousSearchMenu() {
    console.log("");
    console.log("1- Lista de candidatos");
    console.log("2 - Encontrar candidatos");
    console.log("3 - Voltar");
}

function printAutonomousSearcher(prompt) {
    console.log("Digite o nome do candidato:");
    let resposta_candidatos_procurar = prompt("- ");
    console.log("Estamos procurando o canditado "+resposta_candidatos_procurar+"...");
}

function printAutonomousList() {
    console.log("Candidatos:");
    console.log("Claucinho Silva - Faxineiro(a)");
    console.log("Robson Ferreira - Baba");
    console.log("Ednilson Josef - Cuidador(a) de pets");
    console.log("Fabio Roxa - Baba");
    console.log("Flara Peixe - Professor(a) Particular");
    console.log("...");
}

module.exports = {
    printAutonomousMenu,
    printAutonomousServiceList,
    printAutonomousSearchMenu,
    printAutonomousSearcher,
    printAutonomousList
}
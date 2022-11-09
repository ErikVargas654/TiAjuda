const prompt = require('prompt-sync')();

function printSecurityMenu(){
    console.log('-----------------------------------------------------');
    console.log("Bem vindo a área de segurança!");
    console.log("Escolha uma dessas opções!");
    console.log("1 - Polícia militar");
    console.log("2 - Polícia civil");
    console.log("3 - Polícia ambiental");
    console.log("4 - Polícia rodoviária");
    console.log("5 - Conselho tutelar");
    console.log("6 - Delegacia");   
    console.log("7 - Sair para o menu principal");
}

function printPM(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Polícia militar!');
    console.log('Número de telefone: 190');
    console.log('Endereço : Delegacia.');
}

function printPMoptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Ir para opção delegacia')
    console.log('3 - voltar para o menu segurança')
}

function printPC(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Polícia civil!');
    console.log('Número de telefone: 181');
}

function printPCOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Ir para opção delegacia')
    console.log('3 - voltar para o menu segurança')
}

function printPA(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Polícia ambiental!');
    console.log('Número: (48) 3665-5607');
    console.log('Endereço: R. Cel. Conceição, 870');
    console.log('Aberto 24 horas por dia!');
}

function printPAOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Ir para o maps com o endereço')
    console.log('3 - voltar para o menu segurança')
}

function printPR(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Polícia rodoviária')
    console.log('Número: 191');
}

function printPROptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - voltar para o menu segurança')
}

function printCT(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção conselho tutelar!');
    console.log('Número: 100');
    console.log('Endereço: Rua Florianópolis, 106');
}

function printCTOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Ir para o maps com o endereço')
    console.log('3 - voltar para o menu segurança')
}

function printDelegacia(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção delegacia!');
    console.log('Endereço: R. São Sebastião, 32');
}

function printDelegaciaOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ir para o maps com o endereço')
    console.log('2 - voltar para o menu segurança')
}
module.exports = {
    printSecurityMenu,
    printPM,
    printPMoptions,
    printPC,
    printPCOptions,
    printPA,
    printPAOptions,
    printPR,
    printPROptions,
    printCT,
    printCTOptions,
    printDelegacia,
    printDelegaciaOptions
}
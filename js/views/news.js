const prompt = require('prompt-sync')();

function welcomeNews(){
    console.log('----------------------------------------');
    console.log("Bem vindo a área de notícias!");
    console.log("Escolha uma dessas opções!");
}

function newsMenu() {
    console.log('----------------------------------------');
    console.log("1 - TopElegance");
    console.log("2 - VipSocial");
    console.log("3 - JornalRazão");
    console.log("4 - Daquitijucas");
    console.log("5 - voltar");
}
/** 
        console.log('Você escolheu a opção TopElegance!');
        console.log('https://www.topelegance.com.br/');

        console.log('Você escolheu a opção VipSocial!');
        console.log('https://www.vipsocial.com.br/');

        console.log('Você escolheu a opção JornalRazão!');
        console.log('https://jornalrazao.com/');

        console.log('Você escolheu a opção DaquiTijucas');
        console.log('http://www.daquitijucas.com.br/');
*/

module.exports = {
    welcomeNews,
    newsMenu
}

const prompt = require('prompt-sync')();

function welcome(){
    console.log('----------------------------------------');
    console.log('Bem-vindo ao aplicativo TiAjuda');
    console.log('Faça login para continuar!');
}

function servicesOptions(){
    console.log('----------------------------------------');
    console.log('1 - Emergência');
    console.log('2 - Segurança');
    console.log('3 - Saúde');
    console.log('4 - Notícias');
    console.log('5 - Pontos de interesse');
    console.log('6 - Clima');
    console.log('7 - Quiz')
    console.log('8 - Sair');
}

module.exports = {
    welcome,
    servicesOptions,

}
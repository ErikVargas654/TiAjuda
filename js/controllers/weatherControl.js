const prompt = require('prompt-sync')();

function weather (){
    let weatherOption = 0
    while(weatherOption != 1){
        console.log('\nEm breve utilizaremos API´s para pegar a localização do usuário e mudar o clima conforme ele muda de cidade ou o clima muda!');
        console.log('\n1 - sair');
        weatherOption = prompt('\n>>');
    }
}

module.exports = {
    weather
}
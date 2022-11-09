const publicAgenciesFunctions = require('../interestPoints/publicAgenciesFunctions');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function publicAgenciesMenu(){
    let publicAgenciesChoices = 0
    while(publicAgenciesChoices != 6){
        publicAgenciesFunctions.menuAgenciesInterest();
        publicAgenciesChoices = prompt('\nEscolha uma loja de sua preferência! >>');
        if(publicAgenciesChoices == 1){
            let healthSecretaryChoice = 0
            while(healthSecretaryChoice != 1){
                publicAgenciesFunctions.healthSecretary();
                console.log('1 - Sair');
                healthSecretaryChoice = prompt('\n>>');
            }
            
        }else if(publicAgenciesChoices == 2){
            let townHallChoices = 0
            while(townHallChoices != 1){
                publicAgenciesFunctions.townHall();
                console.log('1 - Sair');
                townHallChoices = prompt('\n>>');
            }
        }else if(publicAgenciesChoices == 3){
            let councilorHallChoice = 0
            while(councilorHallChoice != 1){
                publicAgenciesFunctions.councilorHall();
                console.log('1 - Sair');
                councilorHallChoice = prompt('\n>>');
            }
        }else if(publicAgenciesChoices == 4){
            let agricultureChoices = 0
            while(agricultureChoices != 1){
                publicAgenciesFunctions.agricultureSecretary();
                console.log('1 - Sair');
                agricultureChoices = prompt('\n>>');
            }
        }else if(publicAgenciesChoices == 5){
            let samaeChoice = 0
            while(samaeChoice != 1){
                publicAgenciesFunctions.samae();
                console.log('1 - Sair');
                samaeChoice = prompt('\n>>');
            }
        }else if(publicAgenciesChoices == 6){
            let previsertiChoice = 0
            while(previsertiChoice != 1){
                publicAgenciesFunctions.previserti();
                console.log('1 - Sair');
                previsertiChoice = prompt('\n>>');
            }
        }else if(publicAgenciesChoices > 7 || publicAgenciesChoices < 1){
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    publicAgenciesMenu
}
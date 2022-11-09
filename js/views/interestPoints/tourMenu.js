const tourFunctions = require('../interestPoints/tourFunction');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function tourMenu(){
    let tourMenuChoices = 0
    while(tourMenuChoices != 6){
        tourFunctions.touristSpotsOptions();
        tourMenuChoices = prompt('\nEscolha uma loja de sua preferência! >>');
        if(tourMenuChoices == 1){
            let paroquiaChoice = 0
            while(paroquiaChoice != 1){
                tourFunctions.paroquiaDetails();
                console.log('1 - Sair');
                paroquiaChoice = prompt('\n>>');
            }
            
        }else if(tourMenuChoices == 2){
            let museuChoices = 0
            while(museuChoices != 1){
                tourFunctions.museuDetails();
                console.log('1 - Sair');
                museuChoices = prompt('\n>>');
            }
        }else if(tourMenuChoices == 3){
            let outletChoices = 0
            while(outletChoices != 1){
                tourFunctions.outletDetails();
                console.log('1 - Sair');
                outletChoices = prompt('\n>>');
            }
        }else if(tourMenuChoices == 4){
            let dinoChoices = 0
            while(dinoChoices != 1){
                tourFunctions.dinoDetails();
                console.log('1 - Sair');
                dinoChoices = prompt('\n>>');
            }
        }else if(tourMenuChoices == 5){
            let bosqueChoices = 0
            while(bosqueChoices != 1){
                tourFunctions.bosqueDetails();
                console.log('1 - Sair');
                bosqueChoices = prompt('\n>>');
            }
        }else if(tourMenuChoices > 7 || tourMenuChoices < 1){
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    tourMenu
}
const fashionFunctions = require('../interestPoints/fashionFunctions');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function fashionMenu(){
    let fashionMenuChoices = 0
    while(fashionMenuChoices != 5){
        fashionFunctions.fashionMenu();
        fashionMenuChoices = prompt('\nEscolha uma loja de sua preferência! >>');
        if(fashionMenuChoices == 1){
            let prompFashionChoice = 0
            while(prompFashionChoice != 1){
                fashionFunctions.storePromofashion();
                console.log('1 - Sair');
                prompFashionChoice = prompt('\n>>');
            }
            
        }else if(fashionMenuChoices == 2){
            let modaRomanceChoice = 0
            while(modaRomanceChoice != 1){
                fashionFunctions.storeModaRomance();
                console.log('1 - Sair');
                modaRomanceChoice = prompt('\n>>');
            }
        }else if(fashionMenuChoices == 3){
            let conquistaChoice = 0
            while(conquistaChoice != 1){
                fashionFunctions.storeConquista();
                console.log('1 - Sair');
                conquistaChoice = prompt('\n>>');
            }
        }else if(fashionMenuChoices == 4){
            let mitaJeansChoice = 0
            while(mitaJeansChoice != 1){
                fashionFunctions.storeMitaJeans();
                console.log('1 - Sair');
                mitaJeansChoice = prompt('\n>>');
            }
        }else if(fashionMenuChoices > 5 || fashionMenuChoices < 1){
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    fashionMenu
}
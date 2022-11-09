const cookingFunctions = require('../interestPoints/cookingFunction');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function cookingMenu(){
    let cookingMenuChoices = 0
    while(cookingMenuChoices != 5){
        cookingFunctions.cookingMenu();
        cookingMenuChoices = prompt('\nEscolha um restaurante de sua preferência! >>');
        if(cookingMenuChoices == 1){
            let burguemiaChoice = 0
            while(burguemiaChoice != 1){
                cookingFunctions.cookingBurguemiaGrill();
                console.log('1 - Sair');
                burguemiaChoice = prompt('\n>>');
            }
            
        }else if(cookingMenuChoices == 2){
            let madalenaChoice = 0
            while(madalenaChoice != 1){
                cookingFunctions.cookingMadalena();
                console.log('1 - Sair');
                madalenaChoice = prompt('\n>>');
            }
        }else if(cookingMenuChoices == 3){
            let tradicaoChoice = 0
            while(tradicaoChoice != 1){
                cookingFunctions.cookingTradicaoGaucha();
                console.log('1 - Sair');
                tradicaoChoice = prompt('\n>>');
            }
        }else if(cookingMenuChoices == 4){
            let jaquesChoice = 0
            while(jaquesChoice != 1){
                cookingFunctions.cookingVôJaques();
                console.log('1 - Sair');
                jaquesChoice = prompt('\n>>');
            }
        }else if(cookingMenuChoices > 5 || cookingMenuChoices < 1){
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    cookingMenu
}
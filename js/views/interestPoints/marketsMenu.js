const marketFunctions = require('../interestPoints/marketsFunctions');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function marketMenu(){
    let marketMenuChoices = 0
    while(marketMenuChoices != 5){
        marketFunctions.marketsMenu();
        marketMenuChoices = prompt('\nEscolha um mercado  de sua preferência! >>');
        if(marketMenuChoices == 1){
            let kochChoices = 0
            while(kochChoices != 5){
                marketFunctions.kochMenu();
                kochChoices = prompt('\n>>');
                if(kochChoices == 1){
                    let hiperKochChoice = 0
                    while(hiperKochChoice != 1){
                        marketFunctions.hiperKochInfo();
                        console.log('1 - Sair');
                        hiperKochChoice = prompt('\n>>')
                    }
                }else if(kochChoices == 2){
                    let kochCentroChoice = 0
                    while(kochCentroChoice != 1){
                        marketFunctions.kochCentro();
                        console.log('1 - Sair');
                        kochCentroChoice = prompt('\n>>');
                    }    
                }else if(kochChoices == 3){
                    let kochMataChoice = 0
                    while(kochMataChoice != 1){
                        marketFunctions.kochMata();
                        console.log('1 - Sair');
                        kochMataChoice = prompt('\n>>');
                    }
                }else if(kochChoices == 4){
                    let kochKomprao = 0
                    while(kochKomprao != 1){
                        marketFunctions.kompraoKoch();
                        console.log('1 - Sair');
                        kochKomprao = prompt('\n>>');
                    }
                }else if(kochChoices > 5 || kochChoices == 0){
                    invalidFunction.invalidFunction();
                } 
            }
            
        }else if(marketMenuChoices == 2){
            let macrisChoice = 0
            while(macrisChoice != 1){
                marketFunctions.macrisMenu();
                console.log('1 - Sair');
                macrisChoice = prompt('\n>>');
            }
        }else if(marketMenuChoices == 3){
            let compreFacilChoice = 0
            while(compreFacilChoice != 1){
                marketFunctions.compreFacilMenu();
                console.log('1 - Sair');
                compreFacilChoice = prompt('\n>>');
            }
        }else if(marketMenuChoices == 4){
            let ademirChoice = 0
            while(ademirChoice != 1){
                marketFunctions.ademirMenu();
                console.log('1 - Sair');
                ademirChoice = prompt('\n>>');
            }
        }else if(marketMenuChoices > 5){
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    marketMenu
}
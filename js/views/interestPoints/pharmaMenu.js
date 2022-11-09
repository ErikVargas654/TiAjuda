const pharmacyFunctions = require('../interestPoints/pharmacFunctions');
const invalidFunction = require('../invalidFunction');
const prompt = require('prompt-sync')();


function pharmacyMenu() {
    let pharmacyMenuChoices = 0
    while (pharmacyMenuChoices != 11) {
        pharmacyFunctions.pharmacyMenu();
        pharmacyMenuChoices = prompt('\nEscolha um restaurante de sua preferência! >>');
        if (pharmacyMenuChoices == 1) {
            let bellaFarmaChoices = 0
            while (bellaFarmaChoices != 1) {
                pharmacyFunctions.pharmacyBellafarma();
                console.log('1 - Sair');
                bellaFarmaChoices = prompt('\n>>');
            }

        } else if (pharmacyMenuChoices == 2) {
            let tijufarmaChoices = 0
            while (tijufarmaChoices != 1) {
                pharmacyFunctions.pharmacyTijufarma();
                console.log('1 - Sair');
                tijufarmaChoices = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 3) {
            let levifarChoice = 0
            while (levifarChoice != 1) {
                pharmacyFunctions.pharmacyLevifar();
                console.log('1 - Sair');
                levifarChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 4) {
            let sesiChoice = 0
            while (sesiChoice != 1) {
                pharmacyFunctions.pharmacySesi();
                console.log('1 - Sair');
                sesiChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 5) {
            let dmaisChoice = 0
            while (dmaisChoice != 1) {
                pharmacyFunctions.pharmacyDMais();
                console.log('1 - Sair');
                dmaisChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 6) {
            let formulaFamiliarChoice = 0
            while (formulaFamiliarChoice != 1) {
                pharmacyFunctions.pharmacyFormulaFamiliar();
                console.log('1 - Sair');
                formulaFamiliarChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 7) {
            let cunhaEGomesChoice = 0
            while (cunhaEGomesChoice != 1) {
                pharmacyFunctions.pharmacyCunhaEGomes();
                console.log('1 - Sair');
                cunhaEGomesChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 8) {
            let popularChoices = 0
            while (popularChoices != 1) {
                pharmacyFunctions.pharmacyPopular();
                console.log('1 - Sair');
                popularChoices = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 9) {
            let brasilChoice = 0
            while (brasilChoice != 1) {
                pharmacyFunctions.pharmacyBrasil();
                console.log('1 - Sair');
                brasilChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices == 10) {
            let ciaDaSaudeChoice = 0
            while (ciaDaSaudeChoice != 1) {
                pharmacyFunctions.pharmacySesi();
                console.log('1 - Sair');
                ciaDaSaudeChoice = prompt('\n>>');
            }
        } else if (pharmacyMenuChoices > 11) {
            invalidFunction.invalidFunction();
        }
    }
}

module.exports = {
    pharmacyMenu
}
const securityViews = require('../views/security');
let prompt = require ('prompt-sync')();

function securityMainMenu(){

    let securityOption = 0;

    while (securityOption != 7){
    
    securityViews.printSecurityMenu();
    console.log('----------------------------------------');
    securityOption = prompt ('Qual opção você quer usar?');
    
    if (securityOption === '1') {
        securityViews.printPM();
        let pmAnswer = 0;

        while (pmAnswer != 3){      
            securityViews.printPMoptions();
            console.log('----------------------------------------');
            pmAnswer = prompt ('Qual opção você quer usar?');
            if (pmAnswer == 1){
            console.log('----------------------------------------');
            console.log('Ligando para a polícia militar!');
            }else if (pmAnswer == 2){
            console.log('----------------------------------------');
            console.log('Levando para a opção delegacia no menu segurança!');
            }else if (pmAnswer > 3){
            securityViews.invalidFunction();
            }
        }
    }else if (securityOption === '2'){
        securityViews.printPC();
        let pcAnswer = 0;

        while (pcAnswer != 3){
            securityViews.printPCOptions();
            console.log('----------------------------------------');
            pcAnswer = prompt ('Qual opção você quer usar?');
            if (pcAnswer == 1){
                console.log('----------------------------------------');
                console.log('Ligando para a polícia civil!');
            }else if(pcAnswer == 2){
                console.log('----------------------------------------');
                console.log('Encaminhando para a opção delegacia!');
            }else if(pcAnswer > 3){
                securityViews.invalidFunction();
            }
        }

    }else if (securityOption === '3'){
        securityViews.printPA();
        let paAnswer = 0;

            while (paAnswer != 3){
                securityViews.printPAOptions();
                console.log('----------------------------------------');
                paAnswer = prompt('Qual opção você quer usar?');

                if (paAnswer == 1){
                    console.log('----------------------------------------');
                    console.log('Ligando para a polícia Ambiental!');
                }else if(paAnswer == 2){
                    console.log('----------------------------------------');
                    console.log('Encaminhando ao Maps com o endereço escolhido!');
                }else if(paAnswer > 3){
                    securityViews.invalidFunction();
                }
            }
    }else if (securityOption === '4'){
        securityViews.printPR();
        let prAnswer = 0;

            while (prAnswer != 2){
                securityViews.printPROptions();
                console.log('----------------------------------------');
                prAnswer = prompt('Qual opção você quer usar?')

                if (prAnswer == 1){
                    console.log('----------------------------------------');
                    console.log('Ligando para a polícia rodoviária!');
                }
            }
    }else if (securityOption === '5'){
        securityViews.printCT();
        let ctAnswer = 0

            while (ctAnswer != 3){
                securityViews.printCTOptions();
                console.log('----------------------------------------');
                ctAnswer = prompt('Qual opção você quer usar?');

                if(ctAnswer == 1){
                    console.log('----------------------------------------');
                    console.log('Ligando para o conselho tutelar!');
                }else if(ctAnswer == 2){
                    console.log('----------------------------------------');
                    console.log('Encaminhando ao maps com o endereço escolhido!');
                }else if(ctAnswer > 3){
                    securityViews.invalidFunction();
                }
            }
    }else if (securityOption === '6'){
        securityViews.printDelegacia();
        let delegaciaAnswer = 0;

            while (delegaciaAnswer != 2){
                securityViews.printDelegaciaOptions();
                console.log('----------------------------------------');
                delegaciaAnswer = prompt('Qual opção você quer usar?');
                if (delegaciaAnswer == 1){
                    console.log('----------------------------------------');
                    console.log('Encaminhando ao maps com o endereço escolhido!');
                }else if(delegaciaAnswer > 2){
                    securityViews.invalidFunction();
                }
            }
    }else if(securityOption > 7){
        securityViews.invalidFunction();
    }
    }
    console.log("Voltando ao menu principal!");
}

module.exports = {
    securityMainMenu
}
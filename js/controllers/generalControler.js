const prompt = require('prompt-sync')();
const menuEntry = require('../views/menuEntry');
const emergence = require('../views/emergence');
const securityControl = require('./securityController');
const healthControl = require('./healthController');
const newsControl = require('./newsController');
const interestMenuControl = require('./interestMenu');
const weather = require('./weatherControl');
const invalidFunction = require('../views/invalidFunction');
const quizControl = require('./quizControler');


function menuControl(){
    menuEntry.welcome();

    let menuChoice = 0
    while(menuChoice !== 8){
        menuEntry.servicesOptions();
        menuChoice = parseInt(prompt('\nQual serviço você quer usar?'));
        if(menuChoice == 1){
            emergence.emergenceOptions();
            let emergenceOption = prompt('Qual emergência você quer usar?');
            if(emergenceOption == 1){
                emergence.healthyEmergenceMenu();
                menuChoice = 9
            }else if(emergenceOption == 2){
                emergence.securityEmergenceMenu();
                menuChoice = 9
            }else if(emergenceOption == 3){
                emergence.firefighterEmergenceMenu();
                menuChoice = 9
            }
        }else if(menuChoice == 2){
            securityControl.securityMainMenu();
        }else if(menuChoice == 3){
            healthControl.HealthMainMenu();
        }else if(menuChoice == 4){
            newsControl.newsMenu();
        }else if(menuChoice == 5){
            interestMenuControl.interestMenu();
        }else if(menuChoice == 6){
            weather.weather();
        }else if(menuChoice == 7){
            quizControl.quiz();
        }else if(menuChoice > 8 || menuChoice == 0){
            invalidFunction.invalidFunction();
        }
    }
    console.log('Até a próxima!');
}

module.exports = {
    menuControl
}
const intMenu = require('../views/interestPoints/interestGeneralMenu');
const cookingMenu = require('../views/interestPoints/cookingMenu');
const publicAgenciesMenu = require('../views/interestPoints/publicAgenciesMenu')
const fashionMenu = require('../views/interestPoints/fashionMenu');
const marketMenu = require('../views/interestPoints/marketsMenu');
const pharmacyMenu = require('../views/interestPoints/pharmaMenu');
const tourMenu = require('../views/interestPoints/tourMenu');
const invalidFunction = require('../views/invalidFunction');
const prompt = require('prompt-sync')();

function interestMenu(){

    let intMenuChoice = 0
    while(intMenuChoice != 7){
        intMenu.interestMenu();
        intMenuChoice = parseInt(prompt('>>'));
        if(intMenuChoice == 1){
            cookingMenu.cookingMenu();
        }else if(intMenuChoice == 2){
            publicAgenciesMenu.publicAgenciesMenu();
        }else if(intMenuChoice == 3){       
            fashionMenu.fashionMenu();
        }else if(intMenuChoice == 4){
            marketMenu.marketMenu();
        }else if(intMenuChoice == 5){
            pharmacyMenu.pharmacyMenu();
        }else if(intMenuChoice == 6){
            tourMenu.tourMenu();
        }else if(intMenuChoice > 7){
            invalidFunction.invalidFunction();
        }
    }
} 

module.exports = {
    interestMenu
}
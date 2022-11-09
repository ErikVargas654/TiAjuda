const healthyViews = require('../views/health');

let prompt = require ('prompt-sync')();

function HealthMainMenu(){

    let healthOption = 0

    while(healthOption != 6){
        healthyViews.printHealthMenu();
        console.log('----------------------------------------');
        healthOption = prompt('Qual opção você quer escolher?');

            if (healthOption == 1){
                let hospitalAnswer = 0;
                healthyViews.printHospital();
                console.log('----------------------------------------');
                
                while (hospitalAnswer != 3){
                    healthyViews.printHospitalOptions();
                    console.log('----------------------------------------');
                    hospitalAnswer = prompt('Qual opção você quer usar?');
                
                    if (hospitalAnswer == 1){
                        console.log('Ligando para o hospital!');
                    }else if (hospitalAnswer == 2){
                        console.log("Encaminhando ao maps com o endereço escolhido")
                    }else if (hospitalAnswer > 3){
                        healthyViews.invalidFunction();
                    }
                }
            }else if (healthOption == 2){
                let centerAnswer = 0
                console.log('----------------------------------------');
                console.log("Escolha um dos postos!");

                    while (centerAnswer != 6){
                        healthyViews.printHealthyCenters();
                        console.log('----------------------------------------');
                        centerAnswer = prompt('Qual opção você quer usar?');
                    
                        if (centerAnswer == 1){
                            healthyViews.printDonaCalinaCenter();
                            let calinaAnswer = 0
                            while(calinaAnswer != 3){
                                healthyViews.printDonaCalinaOptions();
                                console.log('----------------------------------------');
                                calinaAnswer = prompt('Qual opção você quer usar?');
                                if (calinaAnswer == 1){
                                    console.log('Ligando para o posto de saúde Dona Calina!');
                                }else if(calinaAnswer == 2){
                                    console.log('Encaminhando ao maps com o endereço escolhido!');
                                }else if(calinaAnswer > 3){
                                    healthyViews.invalidFunction();
                                }
                            }
                        }else if(centerAnswer == 2){
                            healthyViews.printCentroCenter();
                            let centroAnswer = 0
                            while(centroAnswer != 3){
                                healthyViews.printCentroCenterOptions();
                                console.log('----------------------------------------');
                                centroAnswer = prompt('Qual opção você quer usar?');
                                if(centroAnswer == 1){
                                    console.log('Ligando para o posto de saúde Centro');
                                }else if(centroAnswer == 2){
                                    console.log('Encaminhando ao maps com o endereço escolhido!');
                                }else if(centroAnswer > 3){
                                    healthyViews.invalidFunction();
                                }
                            }
                        }else if(centerAnswer == 3){
                            healthyViews.printOrlandoCenter();
                            let orlandoAnswer = 0
                            while(orlandoAnswer != 3){
                                healthyViews.printOrlandoOptions();
                                console.log('----------------------------------------');
                                orlandoAnswer = prompt('Qual opção você quer usar?');
                                if(orlandoAnswer == 1){
                                    console.log('Ligando para o posto de saúde Orlando Barreto!');
                                }else if(orlandoAnswer == 2){
                                    console.log('Encaminhando ao maps com o endereço escolhido!');
                                }else if(orlandoAnswer > 3){
                                    healthyViews.invalidFunction();
                                }
                            }                      
                        }else if(centerAnswer == 4){
                            healthyViews.printDoraciCenter();
                            let doraciAnswer = 0
                            while(doraciAnswer != 3){
                                healthyViews.printDoraciOptions();
                                console.log('----------------------------------------');
                                doraciAnswer = prompt('Qual opção você quer usar?');
                                if(doraciAnswer == 1){
                                    console.log('Ligando para o posto de saúde Doraci Rodrigues Fagundes!');
                                }else if(doraciAnswer == 2){
                                    console.log('Encaminhando ao maps com o endereço escolhido!');
                                }else if(doraciAnswer > 3){
                                    healthyViews.invalidFunction();
                                }
                            }
                        }else if(centerAnswer == 5){
                            healthyViews.printDaviCenter();
                            let daviAnswer = 0
                            while(daviAnswer != 3){
                                healthyViews.printDaviOptions();
                                console.log('----------------------------------------');
                                daviAnswer = prompt('Qual opção você quer usar?');
                                if(daviAnswer == 1){
                                    console.log('Ligando para o posto de saúde Davi Vieira!');
                                }else if(daviAnswer == 2){
                                    console.log('Encaminhando ao maps com o endereço escolhido!');
                                }else if(daviAnswer > 3){
                                    healthyViews.invalidFunction();
                                }
                            }
                        }
                    }
            }else if(healthOption == 3){
                healthyViews.printPharmacy();
            }else if(healthOption == 4){
                healthyViews.print24HoursCenter
                let twentyfourAnswer = 0;
                while(twentyfourAnswer != 3){
                    healthyViews.print24HoursCenterOptions();
                    console.log('----------------------------------------');
                    twentyfourAnswer = prompt('Qual opção você quer usar?');
                    if(twentyfourAnswer == 1){
                        console.log('Ligando para posto 24 horas!');
                    }else if(twentyfourAnswer == 2){
                        console.log('Encaminhando ao maps com o endereço escolhido!');
                    }else if(twentyfourAnswer > 3){
                        healthyViews.invalidFunction();
                    }
                }
            }else if(healthOption == 5){
                healthyViews.printSamu();
                samuAnswer = 0
                while(samuAnswer != 2){
                    healthyViews.printSamuOptions();
                    console.log('----------------------------------------');
                    samuAnswer = prompt('Qual opção você quer usar?');
                    if(samuAnswer == 1){
                        console.log('Ligando para o samu!');
                    }else if(samuAnswer > 2){
                        healthyViews.invalidFunction();
                    }
                }
            }else if(healthOption > 6){
                healthyViews.invalidFunction();
            }
            
    }
    console.log('Voltando ao menu principal!');
}

module.exports = {
    HealthMainMenu
}
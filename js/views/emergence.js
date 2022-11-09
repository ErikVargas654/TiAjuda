const prompt = require('prompt-sync')();

function emergenceOptions(){
    console.log('----------------------------------------');
    console.log('Qual serviço de emergência você quer usar?');
    console.log('1 - MÉDICO');
    console.log('2 - POLICIA');
    console.log('3 - BOMBEIROS');
}

function healthyEmergenceMenu(){
    let healthyEmergenceAnswer = 0;
    console.log('----------------------------------------');
    console.log("Qual o nivel da sua emergencia: ");   
    console.log("1 - VERMELHO (Em casos de acidentes graves, problemas de doencas de risco, atendimento urgente de ambulancias)");
    console.log("2 - LARANJA (Em casos de acidentes leves, problemas de doencas, atendimento intermediario de ambulancias)");
    console.log("3 - VERDE (Acidentes leves, machucados expostos, etc)");
    console.log('----------------------------------------');
    healthyEmergenceAnswer = prompt(">> ");

    if(healthyEmergenceAnswer == '1') {
        console.log("Indicamos que faca os atendimentos basicos e tente ir na direcao ao hospital mais proximo e ligue para a ambulancia local!");
    } else if(healthyEmergenceAnswer == '2') {
        console.log("Indicamos que faça os atendimentos basicos no local e va na direcao do hospital mais proximo e ligue para a ambulancia local!");
    }
    else if(healthyEmergenceAnswer == '3') {
        console.log("Indicamos que faça os atendimentos basicos no local e caso seja acidentes de leves, moderado  procure o 24H pois é o local que ira atender suas necessidades e caso necessario fara a mudanca de local para o hosital!");
    }else{
        console.log("Opção inválida");
    }
}

function securityEmergenceMenu(){
    let securityEmergenceAnswer = 0;
    console.log('----------------------------------------');
    console.log("Qual serviço de seguranca voce deseja contatar? ");   
    console.log("1 - Policia Militar(ex. crimes, agressões, proteção de cidadãos em risco, ameaças à vida, relatos de furtos e atentados à segurança pública)");
    console.log("2 - Policia Civil(ex. encaminhamento de denuncias a policia");
    console.log("3 - Policia Ambiental(ex. qualquer ação que ponha em risco a fauna e flora)");
    console.log("4 - Policia Rodoviaria(ex. acidentes em rodovias federais)");
    console.log("5 - Conselho Tutelar(ex. qualquer tipo de violencia contra criancas ou adolecentes)");
    console.log("6 - Delegacia(ex. ");
    console.log("7 - Sair");
    console.log('----------------------------------------');
    securityEmergenceAnswer = prompt(">> ");

    if (securityEmergenceAnswer == 1){
        console.log('----------------------------------------');
        console.log("\nLigando para a policia militar...");
    } else if (securityEmergenceAnswer == 2){
        console.log('----------------------------------------');
        console.log("\nLigando para a policia civil...");
    } else if (securityEmergenceAnswer == 3){
        console.log('----------------------------------------');
        console.log("\nLigando para a policia ambiental...");
    } else if (securityEmergenceAnswer == 4){
        console.log('----------------------------------------');
        console.log("\nLigando para a policia rodoviaria...");
    } else if(securityEmergenceAnswer == 5){
        console.log('----------------------------------------');
        console.log("\nLigando para o conselho tutelar...");
    } else if(securityEmergenceAnswer == 6){
        console.log('----------------------------------------');
        console.log("\nLigando para a delegacia...");           
    } else if(securityEmergenceAnswer == 7){
        console.log('----------------------------------------');
        console.log("\nSaindo do menu emergencia de seguranca...");
    }
}

function firefighterEmergenceMenu(){
    let firefighterEmergenceAnswer = 0;
        console.log('----------------------------------------');
        console.log("Qual serviço dos Bombeiros você deseja constatar? ");   
        console.log("1 - Servico de emergencia(ex. fogo, acidente etc.)");
        console.log("2 - Servico de emergencia medica(ex. problemas de doencas, machucados, socorro rapido, emergencia leves e medios portes.)");
        console.log("3 - Sair");
        console.log('----------------------------------------');
        firefighterEmergenceAnswer = prompt(">> ");
        
        if (firefighterEmergenceAnswer == 1){
            console.log('----------------------------------------');
            console.log("\nLigando para o servico de emergencia dos bombeiros...");
        } else if (firefighterEmergenceAnswer == 2) {
            console.log('----------------------------------------');
            console.log("\nLigando para o servico de emergencia medica...");
        } else if (firefighterEmergenceAnswer == 3) {
            console.log('----------------------------------------');
            console.log("\nSaindo do menu emergencia de bombeiros...");
        }
}

module.exports = {
    emergenceOptions,
    healthyEmergenceMenu,
    securityEmergenceMenu,
    firefighterEmergenceMenu
}
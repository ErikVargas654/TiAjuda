const prompt = require('prompt-sync')();

function printHealthMenu(){
    console.log('-----------------------------------------------------');
    console.log('Bem vindo a área de saúde!');
    console.log('Escolha uma dessas opções!');
    console.log("1 - Hospital")
    console.log("2 - Postos de saúde")
    console.log("3 - Farmácias")
    console.log("4 - posto 24 horas")
    console.log("5 - Samu")  
    console.log("6 - Sair para o menu principal");
}

function printHospital(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção hospital!');
    console.log('Número de telefone: (48) 3263-0197');
    console.log('Endereço: Rua Marechal Deodoro');
}

function printHospitalOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - voltar para o menu segurança');
}

function printHealthyCenters(){
    console.log('-----------------------------------------------------');
    console.log('Escolha a unidade mais perto de você!');
    console.log('Você escolheu a opção Postos de saúde!');
    console.log('1 - Unidade básica de saúde Dona Calina');
    console.log('2 - Unidade básica de saúde centro');
    console.log('3 - Centro de saúde Orlando Barreto');
    console.log('4 - Unidade de saúde Doraci Rodrigues Fagundes');
    console.log('5 - Unidade básica de saúde Davi Vieira');
    console.log('6 - Sair');
    console.log('Lembre-se de verificar os horários de atendimento!');
}

function printDonaCalinaCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a unidade básica de saúde Dona Calina');
    console.log('Número de telefone: (48) 3263-0276');
    console.log('Endereço: R. Lauro Müler, 139-205');
}

function printDonaCalinaOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');
}

function printCentroCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a unidade básica de saúde centro');
    console.log('Número de telefone: (48) 3263-0548');
    console.log('Endereço: R. Gaudêncio Campos, 54');
}

function printCentroCenterOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');
}

function printOrlandoCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu o centro de saúde Orlando Barreto');
    console.log('Número de telefone: (48) 3263-8800');
    console.log('Endereço: Av. Hercílio Luz, 163');
}

function printOrlandoOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');
}

function printDoraciCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu o centro de saúde Doraci Rodrigues Fagundes');
    console.log('Endereço: Av. Hercílio Luz, 688');
    console.log('Número de telefone: (48) 3263-5859');
}

function printDoraciOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');
}

function printDaviCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu o centro de saúde Davi Vieira');
    console.log('Endereço: R. José Laranjeiras, 153');
    console.log('Número de telefone: (48) 3263-1141');
}

function printDaviOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');

}

function printPharmacy(){
    console.log('-----------------------------------------------------');
    console.log('Encaminhando para a opção fármacias...');
}

function printPharmacyOptions(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Farmácias!');
    console.log('Encaminhando para área farmácias');
}


function print24HoursCenter(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu o centro de saúde 24 horas Orlando Barreto');
    console.log('Número de telefone: (48) 3263-8800');
    console.log('Endereço: Av. Hercílio Luz, 163');
    console.log('Horário de funcionamento: 24 horas por dia!');
}

function print24HoursCenterOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Encaminhar ao maps com o endereço escolhido');
    console.log('3 - Voltar ao menu saúde');
}


function printSamu(){
    console.log('-----------------------------------------------------');
    console.log('Você escolheu a opção Samu');
    console.log('Número de emergência: 192');
}

function printSamuOptions(){
    console.log('-----------------------------------------------------');
    console.log('1 - Ligar');
    console.log('2 - Voltar ao menu saúde');
}

module.exports = {
    printHealthMenu,
    printHospital,
    printHospitalOptions,
    printHealthyCenters,
    printDonaCalinaCenter,
    printDonaCalinaOptions,
    printCentroCenter,
    printCentroCenterOptions,
    printOrlandoCenter,
    printOrlandoOptions,
    printDoraciCenter,
    printDoraciOptions,
    printDaviCenter,
    printDaviOptions,
    printPharmacy,
    printPharmacyOptions,
    print24HoursCenter,
    print24HoursCenterOptions,
    printSamu,
    printSamuOptions
}
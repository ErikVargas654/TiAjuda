function menuAgenciesInterest (){
    console.log('\nVocê escolheu Orgãos Públicos!\nEscolha o orgão público do seu interesse!');
    console.log('Escolha uma das opções!\n');
    console.log('1 - Secretária municipal de saúde');
    console.log('2 - Prefeitura municipal de Tijucas');
    console.log('3 - Câmara municipal de vereadores');
    console.log('4 - Secretária de agricultura');
    console.log('5 - SAMAE');
    console.log('6 - PREVISERT');
    console.log('7 - sair');
}

function healthSecretary (){
    console.log('\nVocê escolheu a secretária municipal de saúde!\n');
    console.log('Endereço: Av. Hercílio Luz, 688\n');
    console.log('Telefone: (48) 3263-6606\n')
}

function townHall(){
    console.log('\nVocê escolheu a prefeitura municipal de Tijucas!\n');
    console.log('Endereço: R. Cel. Buchelle, 1 - Centro\n');
    console.log('Telefone: (48) 3263-8100\n');
    console.log('Horário de funcionamento: 7:00 a 13:00 seg a sex\n');
}

function councilorHall(){
    console.log('\nVocê escolheu a câmara municipal de vereadores de Tijucas!');
    console.log('Endereço: R. Cel. Buchelle, 181 - Centro\n');
    console.log('Telefone: (48) 3263-0921\n');
    console.log('Horário de funcionamento: 7:00 a 13:00 seg a sex\n');
}

function agricultureSecretary(){
    console.log('\nVocê escolheu a secretária de agricultura de Tijucas!');
    console.log('Endereço: Av. Hercílio Luz, 400 - Centro\n');
    console.log('Telefone: (48) 3263-1133\n');
    console.log('Horário de funcionamento: 7:00 a 13:00 seg a sex\n');
}

function samae(){
    console.log('\nVocê escolheu o serviço autônomo municipal de água e esgoto de Tijucas!');
    console.log('Endereço: R. Santa Catarina - Centro\n');
    console.log('Telefone: (48) 3263-4065\n');
    console.log('Horário de funcionamento: 8:00 a 12:00 13:30 as 17:00 seg a sex\n');
}

function previserti(){
    console.log('\nVocê escolheu o instituto de previdência social dos servidores públicos de Tijucas!');
    console.log('Endereço: Rua Coronel Buchelle, 36 - Centro\n');
    console.log('Telefone: (48) 3263-5896\n');
    console.log('Horário de funcionamento: 7:00 a 13:00 seg a sex\n');
}

module.exports = {
    menuAgenciesInterest,
    healthSecretary,
    townHall,
    councilorHall,
    agricultureSecretary,
    samae,
    previserti
}
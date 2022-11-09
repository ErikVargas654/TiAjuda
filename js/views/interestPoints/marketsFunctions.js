function marketsMenu (){
    console.log('\nVocê escolheu mercados!\nEscolha o mercado do seu interesse!');
    console.log('Escolha uma das opções!\n');
    console.log('1 - Mercados Koch');
    console.log('2 - Macris');
    console.log('3 - Compre Fácil');
    console.log('4 - Mercado Ademir');
    console.log('5 - Sair');
}

function kochMenu (){
    console.log('Você escolheu os mercados Koch!\nEscolha um próximo de você!');
    console.log('1 - HiperKoch - bairro Centro');
    console.log('2 - Koch Centro');
    console.log('3 - Koch Mata Atlântica');
    console.log('4 - Komprão Koch Joaia');
    console.log('5 - Sair');
}

function hiperKochInfo(){
    console.log('Você esolheu o HiperKoch! Localizado no centro de Tijucas!');
    console.log('\nEndereço: Av. Bayer Filho, 1695 - Centro');
    console.log('\nTelefone: (48) 3263-8200');
    console.log('\nHorário de funcionamento: 8:00 as 22:00 seg a sab 8:00 as 21:00 dom');
}

function kochCentro(){
    console.log('Você esolheu o koch do centro! Localizado no centro de Tijucas!');
    console.log('\nEndereço: Av. Bayer Filho, 725 - Centro');
    console.log('\nTelefone: (48) 3263-0790');
    console.log('\nHorário de funcionamento: 8:00 as 22:00 seg a sab 8:00 as 21:00 dom');
}

function kochMata (){
    console.log('Você esolheu o koch da Mata Atlântica! Localizado no bairro Mata Atlântica!');
    console.log('\nEndereço: Av. Jacarandã, 158 - Mata Atlântica');
    console.log('\nTelefone: (48) 3771-4698');
    console.log('\nHorário de funcionamento: 8:00 as 22:00 seg a sab 8:00 as 21:00 dom');
}

function kompraoKoch (){
    console.log('Você esolheu o Komprão Koch! Localizado no bairro da Joaia!');
    console.log('\nEndereço: Av. Carlos Humberto Ternes - 872 - Joaia');
    console.log('\nTelefone: (48) 3380-8020');
    console.log('\nHorário de funcionamento: 8:00 as 22:00 seg a sab 8:00 as 21:00 dom');
}

function macrisMenu (){
    console.log('Você esolheu o supermercado Macris! Localizado no bairro Praça!');
    console.log('\nEndereço: Rua Lauro Müller, 601, Praça');
    console.log('\nTelefone: (48) 3263-1991');
    console.log('\nHorário de funcionamento: 8:00 as 21:00 seg a sab 8:00 as 20:00 dom');
}

function compreFacilMenu (){
    console.log('Você esolheu o supermercado Compre Fácil! Localizado no bairro XV de Novembro!');
    console.log('\nEndereço: Av. Bayer Filho, 01 - XV de Novembro');
    console.log('\nTelefone: (48) 3263-4958');
    console.log('\nHorário de funcionamento: 8:00 as 21:00 seg a sab 8:00 aso 12:00 dom');
}

function ademirMenu (){
    console.log('Você esolheu o mercado Ademir! Localizado no bairro Praça!');
    console.log('\nEndereço: R. Padre Parise, 45 - Bairro da Praça');
    console.log('\nTelefone: (48) 3263-4958');
    console.log('\nHorário de funcionamento: 8:00 as 21:00 seg a sab 8:00 aso 12:00 dom');
}

module.exports = {
    marketsMenu,
    kochMenu,
    hiperKochInfo,
    kochCentro,
    kochMata,
    kompraoKoch,
    macrisMenu,
    compreFacilMenu,
    ademirMenu
}
function fashionMenu() {
    console.log('\nVocê escolheu moda!\nEscolha a loja do seu interesse!');
    console.log('Escolha uma das opções!\n');
    console.log('1 - Promofashion');
    console.log('2 - Moda e Romance');
    console.log('3 - Loja La Conquista');
    console.log('4 - Mita Jeans');
    console.log('5 - Sair');
}

function storePromofashion() {
    console.log("Voce escolheu loja Promofashion! Localizada no Centro de Tijucas!");
    console.log("Endereço: 120, R. Elói Silva");
    console.log("Telefone: (48) 99159-1412");
    console.log("Horario de atendimento: 09:00 - 19:00 seg a sex, 09:00 - 17:00 sab");
}

function storeModaRomance() {
    console.log("Voce escolheu loja Moda e Romance! Localizada no Centro de Tijucas!");
    console.log("Endereço: Av. Bayer Filho, 881");
    console.log("Telefone: (48) 3641-1101");    
    console.log("Horario de atendimento: 09:00 - 19:00 seg a sex, 09:00 - 17:00 sab");
}

function storeConquista() {
    console.log("Voce escolheu loja La Conquista! Localizada no Centro de Tijucas!");
    console.log("Endereço: R. Leoberto Leal, 185");
    console.log("Telefone: (48) 3263-2153");    
    console.log("Horario de atendimento: 08:00 - 18:00 seg a sex, 09:00 - 12:00 sab");
}

function storeMitaJeans() {
    console.log("Voce escolheu loja Mita Jeans! Localizada no Centro de Tijucas!");
    console.log("Endereço: R. 13 de Novembro, 143");
    console.log("Telefone: (48) 3263-6578");    
    console.log("Horario de atendimento: 08:00 - 18:30 seg a sex, 08:00 - 17:00 sab");
}

module.exports = {
    fashionMenu,
    storePromofashion,
    storeModaRomance,
    storeConquista,
    storeMitaJeans,

}
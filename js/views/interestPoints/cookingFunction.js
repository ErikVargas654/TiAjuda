function cookingMenu() {
    console.log('Você escolheu culinária!');
    console.log('\n1 - Burguemia Grill');
    console.log('2 - Madalena Burger');
    console.log('3 - Churrascaria Tradição Gaucha');
    console.log('4 - Restaurante Vô Jaques Tijucas');
    console.log('5 - Sair');
}

function cookingBurguemiaGrill(){
    console.log("Voce escolheu o restaurante Burguemia Grill! Localizada no bairro da praça de Tijucas!");
    console.log("Endereço: R. Cel. Conceição, número 20");
    console.log("Telefone: (48) 99682-4724");
    console.log("Horario de atendimento: 18:00 - 23:00 ter a dom");
}

function cookingMadalena(){
    console.log("Voce escolheu o restaurante Madalena Burger! Localizada no bairro Universitário de Tijucas!");
    console.log("Endereço: R. Tocantins, 195");
    console.log("Telefone: (48) 99668-6752");
    console.log("Horario de atendimento: 18:30 - 23:45 seg a sab");
}

function cookingTradicaoGaucha(){
    console.log("Voce escolheu o restaurante Churrascaria Tradição Gaucha! Localizada no bairro da praça de Tijucas!");
    console.log("Endereço: Rodovia Governador Mário Covas 1308");
    console.log("Telefone: (48) 3263-2743");
    console.log("Horario de atendimento: 11:00 - 15:00 todos os dias");
}

function cookingVôJaques(){
    console.log("Voce escolheu o restaurante Vô Jaques Tijucas! Localizada no centro de Tijucas!");
    console.log("Endereço: R. Cel. Buchelle, 389");
    console.log("Telefone: (48) 99979-4906");
    console.log("Horario de atendimento: 11:30 - 15:00, 18:30 - 23:00 todos os dias");
}

module.exports = {
    cookingMenu,
    cookingBurguemiaGrill,
    cookingMadalena,
    cookingTradicaoGaucha,
    cookingVôJaques,
}
const prompt = require('prompt-sync')();

function touristSpotsOptions(){
    console.log('----------------------------------------');
    console.log('1 - Paroquia da Tijucas');
    console.log('2 - Museu de Tijucas');
    console.log('3 - Fashion Outlet');
    console.log('4 - Dino Tijucas');
    console.log('5 - Bosque da mata');
    console.log('6 - Voltar ao menu');
}

function paroquiaDetails(){
    console.log('----------------------------------------');
    console.log('Religião');
    console.log('Local sagrado e agradável, sede de alguns eventos envolvendo a religião católica. Possui um ótimo salão para eventos.');
}

function museuDetails(){
    console.log('----------------------------------------');
    console.log('História');
    console.log('Museu de Tijucas, localizado no Casarão Galotti, a casa mais famosa de Tijucas, no bairro Centro.');
}

function outletDetails(){
    console.log('----------------------------------------');
    console.log('Compras e lazer');
    console.log('Shopping térreo e aberto, com amplos corredores e muitas lojas, desde grifes até mesmo moda esportiva.');
}

function dinoDetails(){
    console.log('----------------------------------------');
    console.log('História');
    console.log('O principal e mais famoso ponto turistico de Tijucas.');
}

function bosqueDetails(){
    console.log('----------------------------------------');
    console.log('Lazer');
    console.log('Bosque da mata é um local de loteamento planejado, sera um lugar tranquilo onde podera passear com sua familia.');
}

module.exports = {
    touristSpotsOptions,
    paroquiaDetails,
    museuDetails,
    outletDetails,
    dinoDetails,
    bosqueDetails
}
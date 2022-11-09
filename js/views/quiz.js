const prompt = require('prompt-sync')();
const invalidFunction = require('../views/invalidFunction')

function quizMenu(){
let quizMenuChoice = 0
console.log('\nBem vindo ao quiz do app TiAjuda!\n');
console.log('O quiz do app TiAjuda, é um jogo de perguntas e respostas sobre nossa amada cidade de Tijucas!\n');
while(quizMenuChoice != 2){
    console.log('Escolha uma opção para começarmos');
    console.log('1 - Começar quiz!');
    console.log('2 - Voltar ao menu principal!');
    quizMenuChoice = prompt('\n>>');
    if(quizMenuChoice == 1){
        console.log('\nEntão vamos iniciar o quiz!\n');
        console.log("=============================================="
            +`\n Em que ano a estatua de Tijucas foi colocada?`
            +`\n ====================================================`
            +`\n 1 - 1903 `
            +`\n 2 - 1999 `
            +`\n 3 - 1987 `
            +`\n 4 - 1982 `);
        
            let resposta2 = prompt("-> ")
            if (resposta2 == 3){
                console.log(`\n Você acertou!`
                +`\n ==============================================`
                +`\n Quantos quilometros Tijucas tem?`
                +`\n ==============================================`
                +`\n`
                +`\n 1 - 274,56` 
                +`\n 2 - 278,91` 
                +`\n 3 - 284,01`
                +`\n 4 - 281,47`);
                
                let resposta3 = prompt("->")
                if (resposta3 == 3){
                    console.log(`\n Você acertou!`
                    +`\n`
                    +`\n==============================================`
                    +`\n Quem foi o fundador de Tijucas?`
                    +`\n ==============================================`
                    +`\n`
                    +`\n 1 - Coronel Antônio da Gama `
                    +`\n 2 - Luiz gregorio da silva `
                    +`\n 3 - Antônio valerio `
                    +`\n 4 - João boner machado`);

                    let resposta4 = prompt("-> ")    
                    if (resposta4 == 1){
                        console.log(`\nVocê acertou!`
                        +`\n==============================================`
                        +`\n Qual o significado de Tijucas?`
                        +`\n==============================================`
                        +`\n`
                        +`\n 1 - floresta`
                        +`\n 2 - vale `
                        +`\n 3 - rio `
                        +`\n 4 - terra de lama`);

                        let resposta5 = prompt("-> ")    
                        if (resposta5 == 4){
                            console.log(`\n Você acertou!`
                            +`\n`
                            +`\n ==============================================`
                            +`\n Qual é a casa mais conhecida de Tijucas? `
                            +`\n ==============================================`
                            +`\n 1 - Casarão Bayer `
                            +`\n 2 - Casarão Gallotti `
                            +`\n 3 - Cine Theatro `);

                            let resposta6 = prompt("-> ")    
                            if (resposta6 == 2){
                                console.log(`\n você acertou!`
                                +`\n==============================================`
                                +`\nMeus parabéns, você concluiu o quiz do app TiAjuda!`
                                +`\n==============================================`
                                +`\nVocê acertou todas questões!`);

                            }else{

                            console.log(`\n você errou`
                            +`\n você acertou 4 questões!`);

                                 }  
                            
                        }else{
                            
                            console.log(` você errou`
                            +`\nVocê acertou 3 questões!`);

                             }    
                    }else{

                        console.log(` você errou`
                        +`\nVocê acertou duas questões!`);

                         }   
                }else{

                    console.log(`\n você errou`
                    +`\n você acertou apenas uma questão!`);

                     }        
            }else{

             console.log(`\nResposta errada!`
             +`\nVocê não acertou nenhuma questão!`);

                 }
        }else if(quizMenuChoice > 2 || quizMenuChoice < 1){
            invalidFunction.invalidFunction()
        }

    }
}
       
module.exports = {
    quizMenu
}
const prompt = require('prompt-sync')();
const news = require('../views/news');
const invalidFunction = require('../views/invalidFunction')

function newsMenu(){
    let newsChoice = 0
    news.welcomeNews();
    while(newsChoice != 5){
        news.newsMenu();
        console.log('----------------------------------------');
        newsChoice = prompt('Qual portal de notícia você quer acessar?');
        if(newsChoice == 1){
            console.log('https://www.topelegance.com.br/');
        }else if(newsChoice == 2){
            console.log('https://www.vipsocial.com.br/');
        }else if(newsChoice == 3){
            console.log('https://jornalrazao.com/');
        }else if(newsChoice == 4){
            console.log('http://www.daquitijucas.com.br/');
        }else if(newsChoice > 5 ){
            invalidFunction.invalidFunction();
        }else if(newsChoice < 1){
            invalidFunction.invalidFunction();
        }
    }
    console.log('Voltando ao menu principal!');
}

module.exports = {
    newsMenu
}
const quizMenu = require('../views/quiz');
const prompt = require('prompt-sync')();


function quiz(){
    quizMenu.quizMenu();
}

module.exports = {
    quiz
}
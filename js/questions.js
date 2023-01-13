var questions = [

    {
        question: 'Whats is the difference between xml and html ?',
        option: ['option01', 'option02', 'option03', 'option04', 'option05', 'option06'],
        correctAns: 'option06',
    },

    {
        question: 'HTML stands for _____________',
        option: ['option01', 'option02', 'option03', 'option04', 'option05', 'option06'],
        correctAns: 'option01',
    },

    {
        question: 'HTML program is saved using __________ extension ?',
        option: ['option01', 'option02', 'option03', 'option04', 'option05', 'option06'],
        correctAns: 'option03',
    },

    {
        question: 'Whats is the difference between html and xml ?',
        option: ['option01', 'option02', 'option03', 'option04', 'option05', 'option06'],
        correctAns: 'option03',
    },

];


var currentQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');
var body = document.getElementsByTagName('body')

var indexNum = 0;

function renderQuestion(){

    currentQuestion.innerHTML = indexNum + 1;
    

}

renderQuestion();
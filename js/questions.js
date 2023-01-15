var questions = [

    {
        question: 'Whats is the difference between xml and html ?',
        option: ['casa', 'rua', 'tijolo', 'maquina', 'mouse', 'option06'],
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
        option: ['resposta 1', 'option02', 'option03', 'option04', 'option05', 'option06'],
        correctAns: 'option03',
    },

];


var currentQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');


var indexNum = 0;
var score = 0;


function renderQuestion(){

    currentQuestion.innerHTML = indexNum + 1;
    totalQuestions.innerHTML = questions.length;

    var obj = questions[indexNum];
    
    
    question.innerHTML = obj.question;

    answerParent.innerHTML = '';



    for(var i = 0; i < obj.option.length; i++){

        answerParent.innerHTML += `

        <div class="col-md-4">
            <div class="py-2">
              <button onclick="checkQuestion('${obj.option[i]}', '${obj.correctAns}')" class="btn btn-dark fs-4 w-100">
                ${obj.option[i]}
              </button>
            </div>
          </div> `
    }


}

renderQuestion();

function nextQuestion(){
    indexNum++;
    renderQuestion();
}

function checkQuestion(a, b){

    if(a == b){
        score++;
    }

    console.log(score)

    nextQuestion();

}
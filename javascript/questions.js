import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiQWU3Yo_uvcw9lfajZHTnQlQQE29jmmI",
    authDomain: "quizrealtime-278ed.firebaseapp.com",
    projectId: "quizrealtime-278ed",
    storageBucket: "quizrealtime-278ed.appspot.com",
    messagingSenderId: "700921083925",
    appId: "1:700921083925:web:f185de01d35f67c521361c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();


getDataFromDatabase();

var questions = [];


var currentQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var question = document.getElementById('questionsContainer');
var answerParent = document.getElementById('answerParent');


var indexNum = 0;
var score = 0;


function renderQuestion() {

    if (questions.length != 0) {

        currentQuestion.innerHTML = indexNum + 1;

    } else {
        currentQuestion.innerHTML = indexNum;

    }


    totalQuestions.innerHTML = questions.length;

    var obj = questions[indexNum];
    console.log(obj)

    question.innerHTML = obj.question;
    answerParent.innerHTML = '';

    for (var i = 0; i < obj.option.length; i++) {

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

function getDataFromDatabase() {
    const reference = ref(db, 'questions/');

    onChildAdded(reference, function (data) {
        questions.push(data.val());
        renderQuestion();
    });
}

window.nextQuestion = function () {

    if (indexNum + 1 == questions.length) {
        alert("your score is " + score);
        score = 0;
    }
    else {
        indexNum++;
        renderQuestion();
    }

}


window.checkQuestion = function (a, b) {

    if (a == b) {
        score++;
    }

    nextQuestion();

}



renderQuestion();








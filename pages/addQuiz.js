// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
const db = getDatabase();


var question = document.getElementById('textAreaQuestion');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');

var options = [];
var correctAnswer = 'correct answer is not defined';


function renderOption() {

    optionsParent.innerHTML = ''
    for (var i = 0; i < options.length; i++) {
        optionsParent.innerHTML += 
        `<li ondblclick="setCorrectAnswer('${options[i]}')" 
        class="p-2 my-1 fs-5 text-body-emphasis bg-warning-subtle">
        ${options[i]} </li>`
    }
}


window.addOption = function () {

    options.push(option.value);
    option.value = ''
    console.log(options)
    renderOption()

}

window.setCorrectAnswer = function(a) {
    correctAnswer = a;
    correctAnswerElem.innerHTML = `Correct Answer: ${correctAnswer}`;
}


window.SubmitQuestion = function (){

    var obj = {

        question: question.value,
        option: options,
        correctAns: correctAnswer,
    }

    obj.id = push(ref(db, 'questions/')).key;

    const reference = ref(db, `questions/${obj.id}`);
    set(reference, obj);

    

}
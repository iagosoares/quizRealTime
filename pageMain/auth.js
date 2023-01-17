import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const auth = getAuth(app);



var btnSing = document.getElementById('btn-sing');


btnSing.addEventListener(()  => {

    HandleGoogleSingIn()
});


function HandleGoogleSingIn(){
    return 'deu certo';
}


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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






window.HandleGoogleSingIn = function (){

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    }).catch((error) => {console.log(error)})


    

}



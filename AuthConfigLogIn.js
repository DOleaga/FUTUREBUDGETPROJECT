import { initializeApp }  from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJX_GYDQCrgoaf-FY9QggyraBpKByMRSA",
    authDomain: "future-budget.firebaseapp.com",
    databaseURL: "https://future-budget-default-rtdb.firebaseio.com",
    projectId: "future-budget",
    storageBucket: "future-budget.appspot.com",
    messagingSenderId: "260927317344",
    appId: "1:260927317344:web:02adf1475a715595bb2a05"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = firebase.firestore(app);

// app.use("/config", express.static('./config/'));
const logInForm = document.querySelector('#login-form');
  

logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = logInForm['email'].value
  const password = logInForm['password'].value


signInWithEmailAndPassword(auth, email, password)
  .then(cred => {
    // Signed in 
  
      window.open('http://localhost:81/FUTUREBUDGETPROJECT/CSCI318FutureBudget/AboutUs.php')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
    alert(errorCode);
  });
})


import { initializeApp }  from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
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
const signUpForm = document.querySelector('#signup-form');
  
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signUpForm['email'].value
    const password = signUpForm['password'].value

    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
  .then(cred => {
    // Signed in 
  
      window.open('index.php')
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




/* logInForm.addEventListener('submit', (e) => {
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
*/







/*function register() {


    if(validateEmail(email) == false || validatePassword(password) == false)
    {
      alert('Your email or password is invalid. Please try again.')
      return
    }
    
    if(validateField(firstName) == false || validateField(lastName) == false)
    {
      alert('Your first or last name is invalid. Please try again.')
      return
    }*/



/*function validateEmail(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
  
  
    // Valid Email
    if(expression.test(email) == true){
  
      return true
    }
  
    //Invalid Email
  
    else{
      return false
    }
  
  }
  
  function validatePassword(password){
    //firebase only uses lengths greater than 6 characters for password
    if (password.length <= 6){
      return false;
    }
    else{
      return true;
    }
  }
  */
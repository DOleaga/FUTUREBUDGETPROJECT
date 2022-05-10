import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

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


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

// Set up signup feature

function register() {

  firstName = document.getElementByID('firstname').value
  lastName = document.getElementByID('lastname').value
  email = document.getElementByID('email').value
  password = document.getElementByID('password').value

  if(validateEmail(email) == false || validatePassword(password) == false)
  {
    alert('Your email or password is invalid. Please try again.')
    return
  }
  
  if(validateField(firstName) == false || validateField(lastName) == false)
  {
    alert('Your first or last name is invalid. Please try again.')
    return
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;

      // add user to firebase 
      var database_ref = firebase.database().ref('users')

      var user_data = {
       
        firstName : firstName,
        lastName : lastName,
        email : email,
        lastLogin : Date.now()
      }

      database_ref.child('users' + user.uid).set(user_data)
    })
   
   
    .catch((error) => {
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
      

    })
}


// Validate input fields
function validateEmail(email){
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
  if (password.length < 6){
    return false;
  }
  else{
    return true;
  }
}

function validateField(){
  if (field == null){
    return false;
  }

  if (field.length <= 0){
    return false;
  }
  else{
    return true;
  }
}
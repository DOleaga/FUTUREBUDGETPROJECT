// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJX_GYDQCrgoaf-FY9QggyraBpKByMRSA",
    authDomain: "future-budget.firebaseapp.com",
    projectId: "future-budget",
    storageBucket: "future-budget.appspot.com",
    messagingSenderId: "260927317344",
    appId: "1:260927317344:web:02adf1475a715595bb2a05"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  const database = firebase.database()

  // Set up signup feature

  function register(){

    firstName = document.getElementsByID('firstname').value
    lastName = document.getElementsByID('lastname').value
    email = document.getElementsByID('email').value
    password = document.getElementsByID('password').value
    
  }

  // Validate input fields
  function validateEmail(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email) == true){

      return true
    }

    else{
      return false
    }

  }

  function validatePassword(password){
    //firebase only uses lengths greater than 6 characters for password

  }
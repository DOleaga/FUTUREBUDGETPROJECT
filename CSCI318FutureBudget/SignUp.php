<!DOCTYPE html>
<html lang="en">
<head>
    
    <link rel="stylesheet" href="FutureBudget.css?v=<?php echo time(); ?> " >
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php
        include('header.php');
    ?>
</head>
<body>
    <div id = "register">
            <div class= "container">
                
                <h1>Register Here!</h1>
                <h2>Fill in the following fields</h2>

                <form id = "signup-form">
                <input type="email" id = "email" placeholder= "Email">
                <input type="password" id = "password" placeholder= "Password">
               <!-- CALL REGISTER FUNCTION FROM D3GRAPHS.DBCONFIG.JS TO
                SIGN UP
               

                <input type="button" onclick name = "create" value = "Sign Up">
                -->

                <button> Sign Up </button>
                </form>
                

            </div>
        
    </div>

    <!--   <script src = 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js' type="module">

        import { initializeApp }  from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'

        const firebaseConfig = {
    apiKey: "AIzaSyBJX_GYDQCrgoaf-FY9QggyraBpKByMRSA",
    authDomain: "future-budget.firebaseapp.com",
    databaseURL: "https://future-budget-default-rtdb.firebaseio.com",
    projectId: "future-budget",
    storageBucket: "future-budget.appspot.com",
    messagingSenderId: "260927317344",
    appId: "1:260927317344:web:02adf1475a715595bb2a05"
  };
  
  
initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

    
    </script>
 -->



<script src = "../AuthConfig.js" type="module" ></script>

</body>

  <!-- <script src ='https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'> </script> -->



<?php
        include('footer.php');

        
    ?>


</html>
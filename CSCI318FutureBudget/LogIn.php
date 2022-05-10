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
                
                <h1>Log In</h1>
                <h2>Fill in the following fields</h2>

                <form id = "login-form">
                <input type="email" id = "email" placeholder= "Email">
                <input type="password" id = "password" placeholder= "Password">
               <!-- CALL REGISTER FUNCTION FROM D3GRAPHS.DBCONFIG.JS TO
                SIGN UP
               

                <input type="button" onclick name = "create" value = "Sign Up">
                -->

                <button> Login </button>
                </form>

                

            </div>
        
    </div>
    <script src = "../AuthConfigLogin.js" type="module" ></script>

    </body>


    <?php
        include('footer.php');

        
    ?>


</html>

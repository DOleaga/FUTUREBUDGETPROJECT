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

<?php
    if(isset($_POST['create']))
        echo 'User Submitted.';
    ?>

<body>
    <div id = "register">
        <form action="SignUp.php" method="post">
            <div class= "container">
                <h1>Sign Up</h1>
                <h2>Fill in the following fields</h2>
                <label for="firstname">First Name</label>
                <input type="text" id = "firstname" required>

                <label for="lastname">Last Name</label>
                <input type="text" id = "lastname" required>

                <label for="email">Email Address</label>
                <input type="email" id = "email" required>

                <label for="password">Password</label>
                <input type="password" id = "password" required>

               <!-- CALL REGISTER FUNCTION FROM D3GRAPHS.DBCONFIG.JS TO
                SIGN UP
               -->

                <input type="submit" name = "create" value = "Sign Up">

                

            </div>
        </form>
    </div>
</body>

<?php
        include('footer.php');
    ?>
</html>
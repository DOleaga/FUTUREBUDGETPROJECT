<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Account Page</h1>
   
    <div>
        <form id = "addExpenseInfo">
        
        <label for="addExpense"> Add Spending </label>
         <input type="number" id="expenseCost" name="expenseCost" min="1" max="50,000">
         <button> Add Spending </button>
         </form>
         
         <label for="addSavings"> Add Savings </label>
         <input type="number" id="savingsCost" name="savingsCost" min="1" max="50,000">
         <button> Add Savings </button>
        
        
        

    </div>
    <script src = "../AddExpense.js" type="module" ></script>
</body>
</html>
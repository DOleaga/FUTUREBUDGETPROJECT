import { initializeApp }  from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getFirestore, collection, getDocs, addDoc  } from  'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore-lite.js'

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
const db = getFirestore(app);

const amountForm = document.querySelector('#addExpenseInfo');


amountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expenseAmount = amountForm['expenseCost'].value;
    // const savingAmount = amountForm['savingsCost'].value;
if(expenseAmount >= 1 && expenseAmount <= 50000) {
  try {
    const docRef = addDoc(collection(db, "expenses"), {
      cost: expenseAmount
    });
  
    console.log("Document written with ID: ", docRef.cost);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}
else{
      console.log('Please add a not null value')
    }
    

})
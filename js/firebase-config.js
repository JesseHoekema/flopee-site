// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDkXq1iMiNes8ub6JMIRijdUwhipEqSKLU",
    authDomain: "flopee-db470.firebaseapp.com",
    projectId: "flopee-db470",
    storageBucket: "flopee-db470.appspot.com",
    messagingSenderId: "41067622986",
    appId: "1:41067622986:web:77826112f83eb806b4ecb3",
  };
  
  // Controleer of firebase al bestaat (bijvoorbeeld als het al elders is geïmporteerd)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
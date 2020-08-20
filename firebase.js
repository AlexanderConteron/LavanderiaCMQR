  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDr5I3FjzoPUCqsl2KAoz1HHrZrrLN8UNg",
    authDomain: "lavanderiadesarrollo.firebaseapp.com",
    databaseURL: "https://lavanderiadesarrollo.firebaseio.com",
    projectId: "lavanderiadesarrollo",
    storageBucket: "lavanderiadesarrollo.appspot.com",
    messagingSenderId: "815007945817",
    appId: "1:815007945817:web:876be42b3d8d585ba44d48",
    measurementId: "G-PEJNH997HW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const autenticacion = firebase.auth();
  const fireStoreBD = firebase.firestore();
  const fireStoreBD1 = firebase.database();
  //firebase.analytics();

  
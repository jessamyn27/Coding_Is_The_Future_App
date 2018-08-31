import * as firebase from 'firebase';



export const DB_CONFIG = {
//   <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase.js"></script>
// <script>
//   // Initialize Firebase
   // config = {
    apiKey: "AIzaSyBDJGz3_DoOolsc2DSJgeYl2lTwp0O8e1Q",
    authDomain: "react-flashcards-80665.firebaseapp.com",
    databaseURL: "https://react-flashcards-80665.firebaseio.com",
    projectId: "react-flashcards-80665",
    storageBucket: "react-flashcards-80665.appspot.com",
    messagingSenderId: "433015618711"
  }

  // firebase.initializeApp(config);
// </script>
// }
// Config file
//
export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
//
// // Other file
// import firebase from '../firebase';

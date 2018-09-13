import * as firebase from 'firebase/app';



export const DB_CONFIG = {


  // <script src="https://www.gstatic.com/firebasejs/5.4.1/firebase-database.js">
  // </script>
  // Initialize Firebase
   // config = {
   apiKey: "AIzaSyAZMlzu9YQXMzWECUsHP96KnJ1K92Q36To",
   authDomain: "flashcard-fun-app.firebaseapp.com",
   databaseURL: "https://flashcard-fun-app.firebaseio.com",
   projectId: "flashcard-fun-app",
   storageBucket: "flashcard-fun-app.appspot.com",
   messagingSenderId: "586991915802"
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

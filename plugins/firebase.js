import firebase from "firebase/app"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACZIAA096A_q9S8cdCVSOuY7Bq55Z4hxQ",
    authDomain: "eyes-talk.firebaseapp.com",
    projectId: "eyes-talk",
    storageBucket: "eyes-talk.appspot.com",
    messagingSenderId: "128029044951",
    appId: "1:128029044951:web:d39c6f8882147a8f28c092",
    measurementId: "G-BTHQJCS7SQ"
  };
 
  let app = null;
  if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
   }
  

  export default firebase

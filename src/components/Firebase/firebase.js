import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAvt8RY6CzjnRpaSEnD7o7E2k1-n2wXoMI",
    authDomain: "urban-explorer-e4c86.firebaseapp.com",
    projectId: "urban-explorer-e4c86",
    storageBucket: "urban-explorer-e4c86.appspot.com",
    messagingSenderId: "304258345123",
    appId: "1:304258345123:web:5c434125d1f0ad56a93716",
    measurementId: "G-G0VM6M7QQ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
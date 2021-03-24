import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOOS2JuLCrL9hIiEEw0lEXftA6_GBdJvE",
    authDomain: "urban-explorer-test.firebaseapp.com",
    projectId: "urban-explorer-test",
    storageBucket: "urban-explorer-test.appspot.com",
    messagingSenderId: "687066265144",
    appId: "1:687066265144:web:afd72930bb7a59b25498cd",
    measurementId: "G-R67N6J1EFC"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
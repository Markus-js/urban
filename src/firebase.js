import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAtl8khiTBP8dm0BI8bk_jL1lm1d5ne4Os",
    authDomain: "urban-explorer-tech.firebaseapp.com",
    projectId: "urban-explorer-tech",
    storageBucket: "urban-explorer-tech.appspot.com",
    messagingSenderId: "313683445788",
    appId: "1:313683445788:web:93e59c9bbb560148baf7d9",
    measurementId: "G-ETRWT5T8S7"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
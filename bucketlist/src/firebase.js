// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhoQv2wzcmaNeCIzf2BlJBiPQVKrOCp6E",
  authDomain: "sparata-react-basic.firebaseapp.com",
  projectId: "sparata-react-basic",
  storageBucket: "sparata-react-basic.appspot.com",
  messagingSenderId: "719848147172",
  appId: "1:719848147172:web:d3bbe9383f2e4fb34a04f1",
  measurementId: "G-T1Q5V7343Z",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

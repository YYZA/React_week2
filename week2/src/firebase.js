// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRT7nUFgqdwkF8UcsB8IqmeUYKEWnR0UY",
  authDomain: "sparta-react-week2.firebaseapp.com",
  projectId: "sparta-react-week2",
  storageBucket: "sparta-react-week2.appspot.com",
  messagingSenderId: "404207908610",
  appId: "1:404207908610:web:4eb2bb6070f2ecbccc741b",
  measurementId: "G-J5ZEVCMY9D",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();

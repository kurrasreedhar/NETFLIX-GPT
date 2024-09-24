// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLOAIWs1n3dokrBFjI5S7yyRVPm86YK6Y",
  authDomain: "netflixgpt-d21e6.firebaseapp.com",
  projectId: "netflixgpt-d21e6",
  storageBucket: "netflixgpt-d21e6.appspot.com",
  messagingSenderId: "324611521825",
  appId: "1:324611521825:web:c26e1174d1c6dca471d260",
  measurementId: "G-3ZG0F4RXN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();

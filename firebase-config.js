// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5ao6NuYU1RmCGleCRPZH7wtWPZ-yy4eo",
  authDomain: "site-perso-7be0e.firebaseapp.com",
  projectId: "site-perso-7be0e",
  storageBucket: "site-perso-7be0e.appspot.com",
  messagingSenderId: "229019002509",
  appId: "1:229019002509:web:ec0f5cdb1e92a4568ee4c4",
  measurementId: "G-4ZD50ZS2KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
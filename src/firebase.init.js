// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlZq95JUPiIA3SyMGorIlYknmt3zGPuIs",
    authDomain: "red-onion-food-restauran-15cfc.firebaseapp.com",
    projectId: "red-onion-food-restauran-15cfc",
    storageBucket: "red-onion-food-restauran-15cfc.appspot.com",
    messagingSenderId: "225930879294",
    appId: "1:225930879294:web:5d8ab6ef3df904b5e8cc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
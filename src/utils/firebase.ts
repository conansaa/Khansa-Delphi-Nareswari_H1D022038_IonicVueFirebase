// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPsRzWXGhHWz7oSXmonI2_AcdCUq6xUJk",
    authDomain: "vue-firebase-3b1ef.firebaseapp.com",
    projectId: "vue-firebase-3b1ef",
    storageBucket: "vue-firebase-3b1ef.firebasestorage.app",
    messagingSenderId: "643474731751",
    appId: "1:643474731751:web:8f238903f9681f3a186842"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
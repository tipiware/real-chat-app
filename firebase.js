import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE4WwxSfIkoVpLChtoDC743l3mQsUuBSI",
    authDomain: "chat-d5189.firebaseapp.com",
    projectId: "chat-d5189",
    storageBucket: "chat-d5189.appspot.com",
    messagingSenderId: "202086699767",
    appId: "1:202086699767:web:1ef6eb98b82b31e6c939f2",
    measurementId: "G-EYHBW9ZN87"
};

// Initialize Firebase
const apps = getApps();
const app = !apps.length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
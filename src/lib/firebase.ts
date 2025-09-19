
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2Pbc0vzxBS2WZNOgfoxQsZ7o5GU_GKeo",
    authDomain: "travelerio.firebaseapp.com",
    projectId: "travelerio",
    storageBucket: "travelerio.firebasestorage.app",
    messagingSenderId: "1021167402266",
    appId: "1:1021167402266:web:e83549f3da34f995bd00a3",
    measurementId: "G-RFZ3PP94JC"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBO1KqLV0s-PYo54HN4GJxctqSQgg_-WHk",
    authDomain: "smart-student-hub-3778d.firebaseapp.com",
    projectId: "smart-student-hub-3778d",
    storageBucket: "smart-student-hub-3778d.firebasestorage.app",
    messagingSenderId: "506224381519",
    appId: "1:506224381519:web:bc31864afa1ef2821f643a",
    measurementId: "G-HRTFWRX8H0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

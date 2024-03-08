// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-b5384.firebaseapp.com",
    projectId: "mern-auth-b5384",
    storageBucket: "mern-auth-b5384.appspot.com",
    messagingSenderId: "606413540382",
    appId: "1:606413540382:web:c8ce36f8a53d1ef3caf20f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
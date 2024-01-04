// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f4162.firebaseapp.com",
  projectId: "mern-auth-f4162",
  storageBucket: "mern-auth-f4162.appspot.com",
  messagingSenderId: "540228540006",
  appId: "1:540228540006:web:1a0bae22c730abe52bffa7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
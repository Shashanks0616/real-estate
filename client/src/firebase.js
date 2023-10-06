// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estates.firebaseapp.com",
  projectId: "mern-estates",
  storageBucket: "mern-estates.appspot.com",
  messagingSenderId: "524008322558",
  appId: "1:524008322558:web:36245c0212693fb8cc7caf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
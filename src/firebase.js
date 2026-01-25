// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvQnOqgKXcTuRopDQPA6z2wLpzrw9m4QY",
  authDomain: "stock-managemet-app.firebaseapp.com",
  projectId: "stock-managemet-app",
  storageBucket: "stock-managemet-app.firebasestorage.app",
  messagingSenderId: "414285111306",
  appId: "1:414285111306:web:65356aa560ca4432b03ff3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

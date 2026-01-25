// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Your Firebase Web App config
const firebaseConfig = {
  apiKey: "AIzaSyDvQnOqgKXcTuRopDQPA6z2wLpzrw9m4QY",
  authDomain: "stock-managemet-app.firebaseapp.com",
  projectId: "stock-managemet-app",
  storageBucket: "stock-managemet-app.firebasestorage.app",
  messagingSenderId: "414285111306",
  appId: "1:414285111306:web:65356aa560ca4432b03ff3",
  measurementId: "G-YX7TJPKBD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);

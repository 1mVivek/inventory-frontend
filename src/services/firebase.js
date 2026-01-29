import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvQnOqgKXcTuRopDQPA6z2wLpzrw9m4QY",
  authDomain: "stock-managemet-app.firebaseapp.com",
  projectId: "stock-managemet-app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
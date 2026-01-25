// app.js
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  getIdToken
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const output = document.getElementById("output");

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCred.user.getIdToken();

    output.textContent = "✅ Logged in\n\nToken:\n" + token;
  } catch (err) {
    output.textContent = "❌ Login error: " + err.message;
  }
};

window.getProtected = async function () {
  try {
    const user = auth.currentUser;
    if (!user) {
      output.textContent = "❌ Login first";
      return;
    }

    const token = await user.getIdToken();

    const res = await fetch(
      "https://inventory-backend-wikc.onrender.com/protected",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "❌ API error: " + err.message;
  }
};

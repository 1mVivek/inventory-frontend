import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./firebase";

/* ---------- AUTH ACTIONS ---------- */

export async function login(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return await res.user.getIdToken(); // ✅ Firebase JWT
}

export async function signup(email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return await res.user.getIdToken();
}

export async function logout() {
  await signOut(auth);
}

/* ---------- AUTH STATE ---------- */

export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function getToken() {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  return await user.getIdToken();
}

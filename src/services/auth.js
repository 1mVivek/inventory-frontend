import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

// LOGIN
export async function login(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return await res.user.getIdToken(true);
}

// SIGNUP
export async function signup(email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return await res.user.getIdToken(true);
}

// LOGOUT
export async function logout() {
  await signOut(auth);
}

// AUTH STATE LISTENER
export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// SAFE TOKEN FETCH
export async function getToken() {
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken(true);
}
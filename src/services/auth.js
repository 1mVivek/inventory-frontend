import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function observeAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function getToken() {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  return await user.getIdToken();
}

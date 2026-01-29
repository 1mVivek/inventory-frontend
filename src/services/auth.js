import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export async function login(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user.getIdToken();
}

export async function signup(email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user.getIdToken();
}

export async function logout() {
  await signOut(auth);
}

export function observeAuth(cb) {
  return onAuthStateChanged(auth, cb);
}

export async function getToken() {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  return user.getIdToken();
}
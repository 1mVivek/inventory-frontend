import { createContext, useMemo, useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {

  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  //  Load from Firebase after login
  useEffect(() => {
    const loadTheme = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists() && snap.data().theme) {
        setMode(snap.data().theme);
        localStorage.setItem("theme", snap.data().theme);
      }
    };

    loadTheme();
  }, []);

  const toggleColorMode = async () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);

    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        theme: newMode,
      });
    }
  };

  const value = useMemo(
    () => ({ mode, toggleColorMode }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}

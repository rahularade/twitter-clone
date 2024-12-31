import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";
import { createContext, useContext, useEffect, useState } from "react";

const userAuthContext = createContext();

export function Userauthcontextprovider({ children }) {
  const [user, setuser] = useState([]);
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signin(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function googlesignin() {
    const googleauthprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleauthprovider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setuser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{ user, login, signin, logout, googlesignin }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserauth(){
    return useContext(userAuthContext)
}

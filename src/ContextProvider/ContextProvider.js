import { createContext } from "react";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscirbe();
    };
  }, []);

  const emailPasswordRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPasswordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  let authInfo = {
    loading,
    user,
    googleLogin,
    emailPasswordRegistration,
    emailPasswordLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config.js";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User:", currentUser);
      if (currentUser) {
        console.log(currentUser.email);
        const userInfo = { email: currentUser.email };
        axios
          .post("https://farflix-16cs.vercel.app/jwt", userInfo)
          .then((res) => {
            console.log("JWT Response:", res.data.token);
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          });
      } else {
        localStorage.removeItem("access-token"); // Remove token on logout
      }
    });

    return () => unSubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

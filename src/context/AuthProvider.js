import {
  createUserWithEmailAndPassword,
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const userInfo = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          // const uid = user.uid;
          setUser(user);
        } else {
          console.log("else onAuthStateChanged");
          setUser();
        }
      });
    }, []);

  const authInfo = {
    user,
    logout,
    createUser,
    login,
  };
  return (
    <div>
      <userInfo.Provider value={authInfo}>{children}</userInfo.Provider>
    </div>
  );
};

export default AuthProvider;

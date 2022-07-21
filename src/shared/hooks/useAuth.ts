import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { auth } from "../../firebase";
import { sharedAtoms } from "../states";

export function useAuth() {
  const [user, setUser] = useRecoilState(sharedAtoms.user);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(sharedAtoms.isLoggedIn);
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(sharedAtoms.user);
  useEffect(() => {
    !isLoggedIn && resetUser();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        resetUser();
        setIsLoggedIn(false);
        navigate("/sign-in", { replace: true });
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  function handleRegister(e: React.FormEvent, email: string, password: string) {
    e.preventDefault();
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("register completed");
        setUser(userCredential.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  function handleLogin(e: React.FormEvent, email: string, password: string) {
    e.preventDefault();
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setUser(userCredential.user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  function handleLogout() {
    signOut(auth);
    resetUser();
  }
  return {
    user: user,
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleLogout: handleLogout,
  };
}

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { auth } from "../../firebase";
import { sharedAtoms } from "../states";

export function useAuth() {
  const setUser = useSetRecoilState(sharedAtoms.user);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(sharedAtoms.isLoggedIn);
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(sharedAtoms.user);

  useEffect(() => {
    !isLoggedIn && resetUser();
    setAuthListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function setAuthListeners() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
        navigate("/", { replace: true });
      } else {
        console.log("logged out");
        resetUser();
        navigate("/sign-in", { replace: true });
      }
    });
  }
  function handleRegister(e: React.FormEvent, email: string, password: string) {
    e.preventDefault();
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("register completed");
        setUser(userCredential);
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
        console.log("login completed");
        setUser(userCredential);
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
  }
  return {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleLogout: handleLogout,
  };
}

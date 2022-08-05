import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { auth } from "../../firebase";
import { signInAtoms } from "../../modules";
import { sharedAtoms } from "../states";

export function useAuth() {
  const [user, setUser] = useRecoilState(sharedAtoms.user);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(sharedAtoms.isLoggedIn);
  const setIsError = useSetRecoilState(signInAtoms.isError);
  const setErrorMessage = useSetRecoilState(signInAtoms.errorMessage);
  const setIsSuccess = useSetRecoilState(signInAtoms.isSuccess);
  const setSuccessMessage = useSetRecoilState(signInAtoms.successMessage);

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
        setIsError(false);
      })
      .catch((error) => {
        const errorMessage = error.code;
        console.log(errorMessage);
        setIsError(true);
        setErrorMessage(errorMessage);
      });
  }
  function handleLogin(e: React.FormEvent, email: string, password: string) {
    e.preventDefault();
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoggedIn(true);
        setIsError(false);
      })
      .catch((error) => {
        const errorMessage = error.code;
        console.log(errorMessage);
        setIsError(true);
        setErrorMessage(errorMessage);
      });
  }
  function handleGoogleSignIn() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoggedIn(true);
        navigate({ pathname: "/" });
        setIsError(false);
      })
      .catch((error) => {
        const errorMessage = error.code;
        console.log(errorMessage);
        setIsError(true);
        setErrorMessage(errorMessage);
      });
  }
  function handlePasswordRecovery(email: string) {
    sendPasswordResetEmail(auth, email)
      .then((success) => {
        setIsError(false);
        setIsSuccess(true);
        setSuccessMessage("Password reset sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        setIsError(true);
        setErrorMessage(errorCode);
      });
  }
  function handleLogout() {
    setIsLoggedIn(false);
    signOut(auth);
    resetUser();
  }
  return {
    user: user,
    handleLogin: handleLogin,
    handleGoogleSignIn: handleGoogleSignIn,
    handleRegister: handleRegister,
    handlePasswordRecovery: handlePasswordRecovery,
    handleLogout: handleLogout,
  };
}

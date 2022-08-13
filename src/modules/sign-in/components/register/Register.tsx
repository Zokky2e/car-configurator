/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ErrorPopup, useAuth } from "../../../../shared";
import { signInAtoms } from "../../states";
import { styles } from "./Register.styles";
import googleLogo from "../../assets/g-logo.png";

export function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isError, setIsError] = useRecoilState(signInAtoms.isError);
  const setErrorMessage = useSetRecoilState(signInAtoms.errorMessage);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showConfirmedPassword, setShowConfirmedPassword] =
    useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const userAuth = useAuth();
  const [isClickable, setIsClickable] = useState<boolean>(true);
  useEffect(() => {
    if (email === "" || password === "" || confirmPassword === "")
      return setIsClickable(false);
    setIsClickable(true);
  }, [email, password, confirmPassword]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") return;
    if (password !== confirmPassword) {
      setIsError(true);
      setErrorMessage("Passwords don't match!");
      return;
    }
    userAuth.handleRegister(e, email, password);
    setPassword("");
  }
  function handleGoogle(e: React.FormEvent) {
    e.preventDefault();
    userAuth.handleGoogleSignIn();
  }
  return (
    <section css={styles.container}>
      <p css={styles.title}>Register</p>
      <form css={styles.form}>
        <label css={styles.formElement}>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            placeholder="john.smith@yahoo.com"
            required
          />{" "}
        </label>
        <label css={styles.formElement}>
          <p>Password:</p>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            required
          />{" "}
          <span
            css={styles.eye}
            onPointerDown={() => {
              setShowPassword(true);
            }}
            onPointerUp={() => {
              setShowPassword(false);
            }}
          >
            <img src={require("../../assets/Preview.png")} alt="preview" />
          </span>
        </label>

        <label css={styles.formElement}>
          <p>Confirm Passowrd:</p>
          <input
            type={showConfirmedPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.currentTarget.value);
            }}
            required
          />{" "}
          <span
            css={styles.eye}
            onPointerDown={() => {
              setShowConfirmedPassword(true);
            }}
            onPointerUp={() => {
              setShowConfirmedPassword(false);
            }}
          >
            <img src={require("../../assets/Preview.png")} alt="preview" />
          </span>
        </label>
        <label css={styles.formElement}>
          <span>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
            Remember me
          </span>
        </label>
        <div css={styles.buttons}>
          <button
            css={isClickable ? styles.clickable : styles.notClickable}
            onClick={handleSubmit}
          >
            Register
          </button>
          <p>OR</p>
          <button
            css={[styles.google, styles.clickable]}
            onClick={handleGoogle}
          >
            <img src={googleLogo} alt="google" /> <p>Continue with Google</p>
          </button>
        </div>

        <div css={[isError ? styles.visible : styles.hidden]}>
          <ErrorPopup />
        </div>
      </form>
    </section>
  );
}

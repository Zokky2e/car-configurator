/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ErrorPopup, SuccessPopup, useAuth } from "../../../../shared";
import { signInAtoms } from "../../states";
import { RecoveryPopup } from "../recovery-popup";
import { styles } from "./Login.styles";
import googleLogo from "../../assets/g-logo.png";
export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isClickable, setIsClickable] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPasswordRecoveryPopup, setIsPasswordRecoveryPopup] =
    useState<boolean>(false);
  const isError = useRecoilValue(signInAtoms.isError);
  const isSuccess = useRecoilValue(signInAtoms.isSuccess);
  const [checked, setChecked] = useState<boolean>(false);
  const userAuth = useAuth();
  useEffect(() => {
    if (email === "" || password === "") return setIsClickable(false);
    setIsClickable(true);
  }, [email, password]);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") return;
    userAuth.handleLogin(e, email, password);
    setPassword("");
  }
  function handleGoogle(e: React.FormEvent) {
    e.preventDefault();
    userAuth.handleGoogleSignIn();
  }
  return (
    <section css={styles.container}>
      <RecoveryPopup
        trigger={isPasswordRecoveryPopup}
        setTrigger={(value) => {
          setIsPasswordRecoveryPopup(value);
        }}
      />
      <p css={styles.title}>Login</p>
      <form css={styles.form}>
        <label css={styles.formElement}>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
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
          <span>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked); //not finished
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
            Login
          </button>
          <p>OR</p>
          <button
            css={[styles.google, styles.clickable]}
            onClick={handleGoogle}
          >
            <img src={googleLogo} alt="google" /> <p>Continue with Google</p>
          </button>
        </div>
      </form>
      <article
        css={styles.recovery}
        onClick={() => {
          setIsPasswordRecoveryPopup(true);
        }}
      >
        Forgot password?
      </article>
      <div
        css={[
          (isError || isSuccess) && !isPasswordRecoveryPopup
            ? styles.visible
            : styles.hidden,
        ]}
      >
        {isError ? <ErrorPopup /> : <SuccessPopup />}
      </div>
    </section>
  );
}

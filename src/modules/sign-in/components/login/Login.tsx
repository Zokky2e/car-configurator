/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../shared";
import { styles } from "./Login.styles";
export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isClickable, setIsClickable] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
  }
  function handleGoogle(e: React.FormEvent) {
    e.preventDefault();
    userAuth.handleGoogleSignIn();
  }
  function handlePasswordRecovery() {
    return;
  }
  return (
    <section css={styles.container}>
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
            onMouseDown={() => {
              setShowPassword(true);
            }}
            onMouseUp={() => {
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
            Login
          </button>
          <button onClick={handleGoogle} css={styles.clickable}>
            Google
          </button>
        </div>
      </form>
      <article css={styles.recovery} onClick={handlePasswordRecovery}>
        Forgot password?
      </article>
    </section>
  );
}

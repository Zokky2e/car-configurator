/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { styles } from "./Register.styles";
export function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showConfirmedPassword, setShowConfirmedPassword] =
    useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const [isClickable, setIsClickable] = useState<boolean>(true);
  const setIsLoggedIn = useSetRecoilState(sharedAtoms.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (email === "" || password === "" || confirmPassword === "")
      return setIsClickable(false);
    setIsClickable(true);
  }, [email, password, confirmPassword]);

  function handleSubmit() {
    //TODO auth with useAuth()
    if (email === "" || password === "" || confirmPassword === "") return;
    setIsLoggedIn(true);
    navigate("/", { replace: true });
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
            onMouseDown={() => {
              setShowConfirmedPassword(true);
            }}
            onMouseUp={() => {
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
          <button css={styles.clickable}>Google</button>
          <button
            css={isClickable ? styles.clickable : styles.notClickable}
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}

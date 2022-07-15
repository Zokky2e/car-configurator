/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { styles } from "./Login.styles";
export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isClickable, setIsClickable] = useState<boolean>(true);
  const setIsLoggedIn = useSetRecoilState(sharedAtoms.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (email === "" || password === "") return setIsClickable(false);
    setIsClickable(true);
  }, [email, password]);
  function handleSubmit() {
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  }
  return (
    <section css={styles.container}>
      <p css={styles.title}>Login</p>
      <form css={styles.form} onSubmit={handleSubmit}>
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
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            required
          />{" "}
        </label>
        <div css={styles.button}>
          <input
            css={isClickable ? styles.clickable : styles.notClickable}
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </section>
  );
}

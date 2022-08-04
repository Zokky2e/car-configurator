/** @jsxImportSource @emotion/react */

import { useRecoilState, useResetRecoilState } from "recoil";
import { signInAtoms } from "../../states";
import { styles } from "./Chooser.styles";
export function Chooser() {
  const [isLogin, setIsLogin] = useRecoilState(signInAtoms.isLogin);
  const resetError = useResetRecoilState(signInAtoms.isError);
  function handleClick() {
    setIsLogin(!isLogin);
    resetError();
  }
  return (
    <footer css={styles.container}>
      <p>
        {isLogin ? "If you are a new user " : "Already have an account? "}
        <span onClick={handleClick}>
          {!isLogin ? "Login here" : "Register now!"}
        </span>
      </p>
    </footer>
  );
}

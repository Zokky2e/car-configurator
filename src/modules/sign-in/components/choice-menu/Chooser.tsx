/** @jsxImportSource @emotion/react */

import { useRecoilState } from "recoil";
import { signInAtoms } from "../../states";
import { styles } from "./Chooser.styles";
export function Chooser() {
  const [isLogin, setIsLogin] = useRecoilState(signInAtoms.isLogin);
  return (
    <footer css={styles.container}>
      <p>
        {isLogin ? "If you are a new user " : "Already have an account? "}
        <span
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {!isLogin ? "Login here" : "Register now!"}
        </span>
      </p>
    </footer>
  );
}

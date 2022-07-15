/** @jsxImportSource @emotion/react */

import { useRecoilState } from "recoil";
import { signInAtoms } from "../../states";
import { styles } from "./Options.styles";
export function Options() {
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

/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ErrorPopup, SuccessPopup } from "../../../../shared";
import { signInAtoms } from "../../../sign-in";
import { styles } from "./Header.styles";
export function Header() {
  const navigate = useNavigate();
  const isError = useRecoilValue(signInAtoms.isError);
  const isSuccess = useRecoilValue(signInAtoms.isSuccess);
  return (
    <section>
      <div css={[isError || isSuccess ? styles.visible : styles.hidden]}>
        {isError ? <ErrorPopup /> : <SuccessPopup />}
      </div>
      <header css={styles.container}>
        <p>View saved configurations</p>
        <button
          onClick={() => {
            navigate("/car-select");
          }}
        >
          Configure a car
        </button>
      </header>
    </section>
  );
}

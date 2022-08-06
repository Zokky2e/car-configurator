/** @jsxImportSource @emotion/react */
import { useRecoilValue, useResetRecoilState } from "recoil";
import { signInAtoms } from "../../../modules";
import success from "../../assets/Success.svg";
import exitButton from "../../assets/Exit.svg";
import { styles } from "./SuccesPopup.styles";

export function SuccessPopup() {
  const successMessage = useRecoilValue(signInAtoms.successMessage);
  const resetIsSuccess = useResetRecoilState(signInAtoms.isSuccess);
  function resetIsSuccessMessage() {
    resetIsSuccess();
  }
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <img src={success} alt="warning" />
        <p>Success</p>
        <p>{successMessage}</p>
      </div>
      <div>
        <button onClick={resetIsSuccessMessage} css={styles.button}>
          <img src={exitButton} alt="exit" />
        </button>
      </div>
    </div>
  );
}

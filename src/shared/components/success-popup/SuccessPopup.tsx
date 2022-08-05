/** @jsxImportSource @emotion/react */
import { useRecoilValue, useResetRecoilState } from "recoil";
import { signInAtoms } from "../../../modules";
import success from "../../assets/Success.svg";
import { styles } from "./SuccesPopup.styles";

export function SuccessPopup() {
  const successMessage = useRecoilValue(signInAtoms.successMessage);
  const resetIsSuccess = useResetRecoilState(signInAtoms.isSuccess);
  function resetIsSuccessMessage() {
    resetIsSuccess();
  }
  return (
    <div css={styles.container}>
      <img src={success} alt="warning" />
      <p>Success</p>
      <p>{successMessage}</p>
      <button onClick={resetIsSuccessMessage} css={styles.button}>
        X
      </button>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { signInAtoms } from "../../../modules";
import warning from "../../assets/Warning.svg";
import exitButton from "../../assets/Exit.svg";
import { styles } from "./ErrorPopup.styles";

export function ErrorPopup() {
  const errorMessage = useRecoilValue(signInAtoms.errorMessage);
  const resetIsError = useResetRecoilState(signInAtoms.isError);
  const [message, setMessage] = useState<string>("message");
  useEffect(() => {
    if (errorMessage === "auth/user-not-found") {
      setMessage("User not found!");
    } else if (errorMessage === "auth/wrong-password") {
      setMessage("Wrong email or password!");
    } else if (errorMessage === "auth/email-already-in-use") {
      setMessage("Email already in use!");
    } else if (errorMessage === "auth/invalid-email") {
      setMessage("Email is not valid!");
    } else if (errorMessage === "auth/popup-closed-by-user") {
      setMessage("Google authentification has failed!");
    } else {
      setMessage(errorMessage);
    }
  }, [errorMessage]);
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <img src={warning} alt="warning" />
        <p>Error</p>
        <p>{message}</p>
      </div>
      <div>
        <button onClick={resetIsError} css={styles.button}>
          <img src={exitButton} alt="exit" />
        </button>
      </div>
    </div>
  );
}

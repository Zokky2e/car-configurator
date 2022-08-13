/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { ErrorPopup, useAuth } from "../../../../shared";
import { signInAtoms } from "../../states";
import { styles } from "./Recovery-popup.styles";
interface RecoveryPopupProps {
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
}
export function RecoveryPopup(props: RecoveryPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState<string>("");
  const isError = useRecoilValue(signInAtoms.isError);
  const user = useAuth();
  useEffect(() => {
    function exitHandler(event: any) {
      if (
        props.trigger &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setEmail("");
        props.setTrigger(false);
      }
    }
    document.addEventListener("pointerdown", exitHandler);
    return () => {
      document.removeEventListener("pointerdown", exitHandler);
    };
  });
  function handleSend() {
    user.handlePasswordRecovery(email);
    setEmail("");
  }
  function handleClose() {
    setEmail("");
    props.setTrigger(false);
  }
  return (
    <div
      css={
        props.trigger
          ? [styles.visible, styles.container]
          : [styles.hidden, styles.container]
      }
    >
      <div css={styles.content} ref={popupRef}>
        <p>Enter email for password recovery:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          placeholder="Enter email"
          required
        />{" "}
        <div css={props.trigger && isError ? styles.visible : styles.hidden}>
          <ErrorPopup />
        </div>
        <div>
          <button
            css={[styles.buttonPrimary, styles.text]}
            onClick={handleSend}
          >
            Send email
          </button>
          <button
            css={[styles.buttonSecondary, styles.text]}
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { ReactComponent as InfoSvg } from "../../assets/Info.svg";
import { styles } from "./Info.styles";
interface InfoProps {
  message: string;
}
export function Info(props: InfoProps) {
  const [isPointerEnter, setIsPointerEnter] = useState<boolean>(true);
  function handlePointerEnter() {
    setIsPointerEnter(true);
  }
  function handlePointerLeave() {
    setIsPointerEnter(false);
  }
  return (
    <p css={styles.tooltip}>
      {isPointerEnter ? (
        <span css={styles.message}>{props.message}</span>
      ) : (
        <></>
      )}
      <p
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <InfoSvg />
      </p>
    </p>
  );
}

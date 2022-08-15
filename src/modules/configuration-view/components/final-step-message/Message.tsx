/** @jsxImportSource @emotion/react */
import { styles } from "./Message.styles";
interface MessageProps {
  mainText: string;
  subText: string;
}
export function Message(props: MessageProps) {
  return (
    <div css={styles.container}>
      <p css={styles.mainText}>{props.mainText}</p>
      <p css={styles.subText}>{props.subText}</p>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { CarCardInfo } from "../../types";
import { styles } from "./CarCard.styles";
export function CarCard(props: CarCardInfo) {
  return (
    <li css={styles.card}>
      <img css={styles.image} src={props.picture} alt="car" />
      <p css={styles.year}>{props.year}</p>
      <p css={styles.name}>{props.name}</p>
      <button css={styles.button}>Configure Now</button>
    </li>
  );
}

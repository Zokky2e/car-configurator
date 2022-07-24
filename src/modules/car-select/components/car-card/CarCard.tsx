/** @jsxImportSource @emotion/react */
import { createSearchParams, useNavigate } from "react-router-dom";
import { CarCardInfo } from "../../types";
import { styles } from "./CarCard.styles";
export function CarCard(props: CarCardInfo) {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate({
      pathname: "/configuration",
      search: createSearchParams({
        name: props.docName,
      }).toString(),
    });
  }
  return (
    <li css={styles.card}>
      <img css={styles.image} src={props.picture} alt="car" />
      <p css={styles.year}>{props.year}</p>
      <p css={styles.name}>{props.name}</p>
      <button css={styles.button} onClick={handleRedirect}>
        Configure Now
      </button>
    </li>
  );
}

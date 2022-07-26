/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { configurationViewAtoms } from "../../../configuration-view";
import { CarCardInfo } from "../../types";
import { styles } from "./CarCard.styles";
export function CarCard(props: CarCardInfo) {
  const navigate = useNavigate();
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);

  function handleRedirect() {
    setModel(props.docName);
    setName(props.name);
    setExteriorColor(props.color);
    navigate({
      pathname: "/configuration",
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

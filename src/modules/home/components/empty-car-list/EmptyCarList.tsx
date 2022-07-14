/** @jsxImportSource @emotion/react */
import { styles } from "./EmptyCarList.styles";
import { Link } from "react-router-dom";

export function EmptyCarList() {
  return (
    <>
      <article css={styles.carList}>
        <img src={require("../../assets/front left-2.png")} alt="car" />
        <p>
          You haven't configured any cars yet. You may choose to{" "}
          <Link to="/car-select">configure some now.</Link>{" "}
        </p>
      </article>
    </>
  );
}

/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { styles } from "./Header.styles";
export function Header() {
  const navigate = useNavigate();

  return (
    <section>
      <header css={styles.container}>
        <p>View saved configurations</p>
        <button
          onClick={() => {
            navigate("/car-select");
          }}
        >
          Configure a car
        </button>
      </header>
    </section>
  );
}

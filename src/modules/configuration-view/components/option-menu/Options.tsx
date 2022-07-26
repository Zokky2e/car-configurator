/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../states";
import { styles } from "./Options.styles";

export function Options() {
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);

  return (
    <header css={styles.container}>
      <div css={styles.content}>
        <button css={styles.backButton}>{"<"}</button>
        <p css={styles.subText}>{year}</p>
        <p css={styles.mainText}>{name}</p>
      </div>
      <div css={styles.buttons}>
        <button>Edit configuration</button>
        <button>Delete</button>
      </div>
    </header>
  );
}

/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../states";
import { styles } from "./ConfigurationInfo.styles";

export function ConfigurationInfo() {
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);

  return (
    <section css={styles.container}>
      <div>
        <p css={styles.mainText}>{name}</p>
        <p css={styles.subText}>{year}</p>
      </div>
      <div>
        <p css={styles.smallText}>Total</p>
        <p css={styles.mediumText}>{`${totalPrice} €`}</p>
      </div>
    </section>
  );
}

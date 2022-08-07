/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import { Info } from "../../../../shared";
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
        <div css={styles.smallText}>
          <p css={styles.uppercase}>Total</p>
          <Info message={"Value calculated in euros"} />
        </div>
        <p css={styles.mediumText}>{`${totalPrice.toLocaleString()} €`}</p>
      </div>
    </section>
  );
}

/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../states";
import { DescriptionCard } from "../description-card/DescriptionCard";
import { styles } from "./Details.styles";

export function Details() {
  const colorExterior = useRecoilValue(configurationViewAtoms.colorExterior);
  const colorExteriorPicture = useRecoilValue(
    configurationViewAtoms.colorExteriorPicture
  );
  const colorExteriorPrice = useRecoilValue(
    configurationViewAtoms.colorExteriorPrice
  );
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const wheelsPicture = useRecoilValue(configurationViewAtoms.wheelsPicture);
  const wheelsPrice = useRecoilValue(configurationViewAtoms.wheelsPrice);

  const colorInterior = useRecoilValue(configurationViewAtoms.colorInterior);
  const colorInteriorPicture = useRecoilValue(
    configurationViewAtoms.colorInteriorPicture
  );
  const colorInteriorPrice = useRecoilValue(
    configurationViewAtoms.colorInteriorPrice
  );

  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  return (
    <section css={styles.container}>
      <div>
        <p>Your configuration details</p>
      </div>
      <div>
        <p css={[styles.section, styles.priceText]}>Exterior</p>
        <DescriptionCard
          image={colorExteriorPicture}
          name={colorExterior}
          price={colorExteriorPrice}
        />
        <DescriptionCard
          image={wheelsPicture}
          name={wheels}
          price={wheelsPrice}
        />
        <p css={[styles.section, styles.priceText]}>Interior</p>
        <DescriptionCard
          image={colorInteriorPicture}
          name={colorInterior}
          price={colorInteriorPrice}
        />
        <div css={styles.priceText}>
          <p css={styles.subText}>Total</p>
          <p>{`${totalPrice.toLocaleString()} €`}</p>
        </div>
      </div>
    </section>
  );
}

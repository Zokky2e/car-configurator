/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../states";
import { DescriptionCard } from "../description-card/DescriptionCard";
import { styles } from "./Details.styles";

export function Details() {
  const isNewConfiguration = useRecoilValue(sharedAtoms.isNewConfiguration);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
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

  function handleEdit(step: number) {
    setPreviousStep(currentStep);
    setCurrentStep(step);
    navigate({ pathname: "/configurator" });
  }
  return (
    <section css={styles.container}>
      <div>
        <p>Your configuration details</p>
      </div>
      <div>
        <div css={styles.section}>
          <p>Exterior</p>
          {!isNewConfiguration ? (
            <button
              onClick={() => {
                handleEdit(1);
              }}
              css={styles.smallText}
            >
              Edit
            </button>
          ) : (
            <></>
          )}
        </div>
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
        <div css={styles.section}>
          <p>Interior</p>
          {!isNewConfiguration ? (
            <button
              onClick={() => {
                handleEdit(2);
              }}
              css={styles.smallText}
            >
              Edit
            </button>
          ) : (
            <></>
          )}
        </div>
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

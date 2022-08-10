/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../../configurator";
import { CarCardInfo } from "../../types";
import { styles } from "./CarCard.styles";
export function CarCard(props: CarCardInfo) {
  const navigate = useNavigate();
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const resetId = useResetRecoilState(configurationViewAtoms.id);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setInteriorColor = useSetRecoilState(
    configurationViewAtoms.colorInterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const setSelectedColorInterior = useSetRecoilState(
    configuratorAtoms.selectedColorInterier
  );
  const setSelectedColorExterior = useSetRecoilState(
    configuratorAtoms.selectedColor
  );
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setCurrentStep = useSetRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
  function handleRedirect() {
    setSelectedColorInterior(props.colorInterior);
    setSelectedColorExterior(props.colorExterior);
    setSelectedWheels("One");
    setCurrentStep(3);
    setPreviousStep(2);
    resetId();
    setModel(props.docName);
    setName(props.name);
    setExteriorColor(props.colorExterior);
    setInteriorColor(props.colorInterior);
    setIsNewConfiguration(true);
    setTimeout(() => {
      navigate({
        pathname: "/configuration",
      });
    }, 500);
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

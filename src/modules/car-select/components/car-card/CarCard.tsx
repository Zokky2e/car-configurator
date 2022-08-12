/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../../configurator";
import { CarCardInfo } from "../../types";
import { styles } from "./CarCard.styles";
import loadingImage from "../../assets/front-1-rs5.png";
export function CarCard(props: CarCardInfo) {
  const navigate = useNavigate();
  const storage = getStorage();
  const gsReference = ref(storage, props.picture);
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const resetId = useResetRecoilState(configurationViewAtoms.id);
  const setWheels = useSetRecoilState(configurationViewAtoms.wheels);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setExteriorPrice = useSetRecoilState(
    configurationViewAtoms.colorExteriorPrice
  );
  const setInteriorColor = useSetRecoilState(
    configurationViewAtoms.colorInterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const setSelectedColorInterior = useSetRecoilState(
    configuratorAtoms.selectedColorInterior
  );
  const setSelectedColorExterior = useSetRecoilState(
    configuratorAtoms.selectedColor
  );
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setModelPrice = useSetRecoilState(configurationViewAtoms.modelPrice);
  const setCurrentStep = useSetRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
  function handleRedirect() {
    if (props.docName === "rs6") setModelPrice(117595);
    else if (props.docName === "rs5") setModelPrice(75195);
    else {
      setModelPrice(65900);
    }

    setExteriorPrice(0);
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
    setWheels("One");
    setTimeout(() => {
      navigate({
        pathname: "/configuration",
      });
    }, 500);
  }
  const [image, setImage] = useState<string>(loadingImage);
  useEffect(() => {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsReference]);
  return (
    <li css={styles.card}>
      <img css={styles.image} src={image} alt="car" />
      <p css={styles.year}>{props.year}</p>
      <p css={styles.name}>{props.name}</p>
      <button css={styles.button} onClick={handleRedirect}>
        Configure Now
      </button>
    </li>
  );
}

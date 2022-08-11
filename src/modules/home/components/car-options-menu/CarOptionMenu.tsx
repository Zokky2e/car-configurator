/** @jsxImportSource @emotion/react */

import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { db } from "../../../../firebase";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../../configurator";
import { signInAtoms } from "../../../sign-in";
import { CarInfo } from "../../types";
import { styles } from "./CarOptionMenu.styles";

export function CarOptionMenu(props: CarInfo) {
  const navigate = useNavigate();
  const [isOptionsMenu, setIsOptionsMenu] = useState<boolean>(false);
  const user = useRecoilValue(sharedAtoms.user);
  const setId = useSetRecoilState(configurationViewAtoms.id);
  const setCurrentStep = useSetRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setInteriorColor = useSetRecoilState(
    configurationViewAtoms.colorInterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);
  const setIsError = useSetRecoilState(signInAtoms.isError);
  const setErrorMessage = useSetRecoilState(signInAtoms.errorMessage);
  const setIsSuccess = useSetRecoilState(signInAtoms.isSuccess);
  const setSuccessMessage = useSetRecoilState(signInAtoms.successMessage);
  const setSelectedColorInterior = useSetRecoilState(
    configuratorAtoms.selectedColorInterior
  );
  const setSelectedColorExterior = useSetRecoilState(
    configuratorAtoms.selectedColor
  );
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setModelPrice = useSetRecoilState(configurationViewAtoms.modelPrice);

  function handleEditConfiguration() {
    if (props.model === "rs6") setModelPrice(117595);
    else if (props.model === "rs5") setModelPrice(75195);
    else {
      setModelPrice(65900);
    }
    setCurrentStep(3);
    setPreviousStep(1);
    setIsNewConfiguration(false);
    setId(props.id);
    setModel(props.model);
    setName(props.name);
    setExteriorColor(props.color);
    setInteriorColor(props.colorInterior);
    setSelectedColorExterior(props.color);
    setSelectedColorInterior(props.colorInterior);
    setSelectedWheels(props.wheels);
    setTimeout(() => {
      navigate({
        pathname: "/configuration",
      });
    }, 500);
  }
  async function handleDelete() {
    await deleteDoc(doc(db, user.uid + "/", props.id))
      .then(() => {
        setIsSuccess(true);
        setSuccessMessage("You have successfully deleted a car configuration!");
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
      });
  }
  return (
    <div css={styles.container}>
      <button
        onClick={() => setIsOptionsMenu(!isOptionsMenu)}
        css={[isOptionsMenu ? [styles.button, styles.active] : styles.button]}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul css={[styles.menu, isOptionsMenu ? styles.visible : styles.hidden]}>
        <button onClick={handleEditConfiguration}>Edit configuration</button>
        <button onClick={handleDelete}>Delete</button>
      </ul>
    </div>
  );
}

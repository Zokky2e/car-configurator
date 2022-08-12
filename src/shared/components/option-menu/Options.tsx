/* eslint-disable no-restricted-globals */
/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { configurationViewAtoms } from "../../../modules/configuration-view/states";
import { sharedAtoms } from "../../states";
import { styles } from "./Options.styles";
import { ReactComponent as ArrowLeft } from "../../assets/Arrow-left.svg";
import { useEffect, useState } from "react";

export function Options() {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(screen.width);
  const [currentStep, setCurrentStep] = useRecoilState(sharedAtoms.currentStep);
  const previousStep = useRecoilValue(sharedAtoms.previousStep);
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const isNewConfiguration = useRecoilValue(sharedAtoms.isNewConfiguration);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const isSelectMenuOpen = useRecoilValue(sharedAtoms.isSelectMenuOpen);
  const resetIsSelectedType = useResetRecoilState(sharedAtoms.isSelectMenuOpen);
  function handleEditConfiguration() {
    resetIsSelectedType();
    setCurrentStep(1);
    setIsNewConfiguration(false);
    navigate({ pathname: "/configurator" });
  }
  function handleGoBack() {
    setCurrentStep(previousStep);
    if (currentStep === 2 && previousStep !== 3) {
      setCurrentStep(1);
      return;
    }
    navigate(-1);
  }
  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(screen.width);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header css={styles.container}>
      <div css={styles.content}>
        <button
          onClick={() => {
            handleGoBack();
          }}
          css={styles.backButton}
        >
          {<ArrowLeft />}
        </button>
        <p css={styles.subText}>{year}</p>
        <p css={styles.mainText}>{name}</p>
      </div>
      {isNewConfiguration ? (
        <div css={styles.buttons}>
          <button onClick={handleEditConfiguration}>
            {screenWidth <= 500 ? "Edit" : "Edit configuration"}
          </button>
          <button
            onClick={() => {
              handleGoBack();
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div
          css={[
            styles.steps,
            isSelectMenuOpen ? styles.hidden : styles.visible,
          ]}
        >
          <p css={currentStep === 1 ? styles.currentStep : ""}>
            <span>01</span>Exterior
          </p>
          <p css={currentStep === 2 ? styles.currentStep : ""}>
            <span>02</span>Interior
          </p>
          <p css={currentStep === 3 ? styles.currentStep : ""}>
            <span>03</span>Summary
          </p>
        </div>
      )}
    </header>
  );
}

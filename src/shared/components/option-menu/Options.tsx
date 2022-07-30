/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../..";
import { configurationViewAtoms } from "../../../modules/configuration-view/states";
import { configuratorAtoms } from "../../../modules/configurator";
import { styles } from "./Options.styles";

export function Options() {
  const navigate = useNavigate();
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const isNewConfiguration = useRecoilValue(sharedAtoms.isNewConfiguration);
  const setCurrentPart = useSetRecoilState(sharedAtoms.currentStep);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const resetIsSelectedType = useResetRecoilState(
    configuratorAtoms.isSelectedType
  );
  function handleEditConfiguration() {
    resetIsSelectedType();
    setCurrentPart(1);
    setIsNewConfiguration(false);
    navigate({ pathname: "/configurator" });
  }

  return (
    <header css={styles.container}>
      <div css={styles.content}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          css={styles.backButton}
        >
          {"<"}
        </button>
        <p css={styles.subText}>{year}</p>
        <p css={styles.mainText}>{name}</p>
      </div>
      {isNewConfiguration ? (
        <div css={styles.buttons}>
          <button onClick={handleEditConfiguration}>Edit configuration</button>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div css={styles.steps}>
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

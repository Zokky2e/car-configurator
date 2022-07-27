/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../states";
import { styles } from "./Options.styles";

export function Options() {
  const navigate = useNavigate();
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const isNewConfiguration = useRecoilValue(sharedAtoms.isNewConfiguration);
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
          <button>Edit configuration</button>
          <button>Delete</button>
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

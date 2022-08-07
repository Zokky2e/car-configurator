/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Carousel, Info, sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { SetupItem } from "../setup-item";
import { SetupSelectMenu } from "../setup-select-menu";
import { styles } from "./SetupMenu.styles";
import { ReactComponent as ArrowRight } from "../../../../shared/assets/Arrow-right.svg";
export function SetupMenu() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
  const isSelectedMenu = useRecoilValue(sharedAtoms.isSelectMenuOpen);
  const isExterior = currentStep === 1 ? true : false;
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const exteriorColor = useRecoilValue(configurationViewAtoms.colorExterior);
  const exteriorColorPicture = useRecoilValue(
    configurationViewAtoms.colorExteriorPicture
  );
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const wheelsPicture = useRecoilValue(configurationViewAtoms.wheelsPicture);
  const interiorColor = useRecoilValue(configurationViewAtoms.colorInterior);
  const interiorColorPicture = useRecoilValue(
    configurationViewAtoms.colorInteriorPicture
  );
  function handleNextStep(step: number) {
    setPreviousStep(currentStep);
    setCurrentStep(step);
  }
  return (
    <div css={styles.container}>
      <div css={styles.slider}>
        <Carousel />
      </div>
      <aside css={styles.menu}>
        {isSelectedMenu ? (
          <SetupSelectMenu isSelected={isSelectedMenu} />
        ) : isExterior ? (
          <>
            <div css={styles.items}>
              <SetupItem
                image={exteriorColorPicture}
                name={exteriorColor}
                type="Paint Color"
              />
              <SetupItem image={wheelsPicture} name={wheels} type="Wheels" />
            </div>
            <div css={styles.menuFooter}>
              <div css={styles.price}>
                <p css={styles.text}>
                  <p css={styles.uppercase}>Total</p>
                  <span>
                    <Info message={"Value calculated in euros"} />
                  </span>
                </p>
                <p css={styles.number}>{`${totalPrice.toLocaleString()} €`}</p>
              </div>
              <button
                onClick={() => {
                  handleNextStep(2);
                }}
                css={styles.menuButton}
              >
                <p>Interior</p> <p>{<ArrowRight />}</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div css={styles.items}>
              <SetupItem
                image={interiorColorPicture}
                name={interiorColor}
                type="Color"
              />
            </div>
            <div css={styles.menuFooter}>
              <div css={styles.price}>
                <p css={styles.text}>
                  <p css={styles.uppercase}>Total</p>
                  <span>
                    <Info message={"Value calculated in euros"} />
                  </span>
                </p>

                <p css={styles.number}>{`${totalPrice.toLocaleString()} €`}</p>
              </div>
              <button
                onClick={() => {
                  handleNextStep(3);
                  navigate({ pathname: "/configuration" });
                }}
                css={styles.menuButton}
              >
                <p>Summary</p> <p>{<ArrowRight />}</p>
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

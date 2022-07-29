/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import { Carousel, sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../states";
import { SetupItem } from "../setup-item";
import { SetupSelectMenu } from "../setup-select-menu";
import { styles } from "./SetupMenu.styles";
export function SetupMenu() {
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const selectedType = useRecoilValue(configuratorAtoms.selectedType);
  const isSelectedMenu = useRecoilValue(configuratorAtoms.isSelectedType);
  const isExterior = currentStep === 1 ? true : false;
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const exteriorColor = useRecoilValue(configurationViewAtoms.colorExterior);
  const exteriorColorPicture = useRecoilValue(
    configurationViewAtoms.colorExteriorPicture
  );
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const wheelsPicture = useRecoilValue(configurationViewAtoms.wheelsPicture);
  return (
    <div css={styles.container}>
      <div css={styles.slider}>
        <Carousel />
      </div>
      <aside css={styles.menu}>
        <SetupSelectMenu type={selectedType} isSelected={isSelectedMenu} />
        {isExterior ? (
          <div css={styles.items}>
            <SetupItem
              image={exteriorColorPicture}
              name={exteriorColor}
              type="Paint Color"
            />
            <SetupItem image={wheelsPicture} name={wheels} type="Wheels" />
          </div>
        ) : (
          <div css={styles.items}>
            <SetupItem image="" name="" type="Color" />
          </div>
        )}
        <div css={styles.menuFooter}>
          <div css={styles.price}>
            <p css={styles.text}>Total</p>
            <p css={styles.number}>{`${totalPrice.toLocaleString()} €`}</p>
          </div>
          <button css={styles.menuButton}>Interior {">"}</button>
        </div>
      </aside>
    </div>
  );
}

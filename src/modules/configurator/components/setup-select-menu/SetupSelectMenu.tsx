/** @jsxImportSource @emotion/react */
import { useRecoilState, useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../states";
import { typeSelect } from "../../types";
import { styles } from "./SetupSelectMenu.styles";
interface SelectMenuProps {
  type: typeSelect;
  isSelected: boolean;
}
export function SetupSelectMenu(props: SelectMenuProps) {
  console.log(props.type);
  console.log(props.isSelected);
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const [isSelectedType, setIsSelectedType] = useRecoilState(
    configuratorAtoms.isSelectedType
  );
  function handleSelect() {
    setIsSelectedType(!isSelectedType);
  }
  return (
    <div css={props.isSelected ? styles.container : styles.hidden}>
      <p>Hello</p>

      <div css={styles.menuFooter}>
        <div css={styles.price}>
          <p css={styles.text}>Total</p>
          <p css={styles.number}>{`${totalPrice.toLocaleString()} €`}</p>
        </div>
        <button css={styles.button} onClick={handleSelect}>
          Done
        </button>
      </div>
    </div>
  );
}

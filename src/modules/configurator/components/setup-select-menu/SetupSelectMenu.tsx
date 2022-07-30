/** @jsxImportSource @emotion/react */
import { getStorage, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../states";
import { SetupSelectItem } from "../setup-select-item";
import { styles } from "./SetupSelectMenu.styles";
interface SelectMenuProps {
  isSelected: boolean;
}
export function SetupSelectMenu(props: SelectMenuProps) {
  const selectedType = useRecoilValue(configuratorAtoms.selectedType);
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const model = useRecoilValue(configurationViewAtoms.model);
  const [items, setItems] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  let type: string;
  const setIsSelectedType = useSetRecoilState(configuratorAtoms.isSelectedType);
  const resetSelectedType = useResetRecoilState(configuratorAtoms.selectedType);
  useEffect(() => {
    setItems([]);
    if (selectedType === "Wheels") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      type = `${model}-wheel`;
    } else if (selectedType === "Paint Color") {
      type = `exterior-color`;
    } else {
      type = `interior-color`;
    }
    const storage = getStorage();
    const itemsRef = ref(storage, type);
    listAll(itemsRef).then((res) => {
      res.items.forEach((item) => {
        if (item.name.includes(`Car=${model.toUpperCase()}`)) {
          setImages((oldImages) => [...oldImages, item.fullPath]);
          setItems((oldItems) => [...oldItems, item.name]);
        }
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSelected]);

  function handleSelect() {
    resetSelectedType();
    setIsSelectedType(false);
  }
  return (
    <div css={props.isSelected ? styles.container : styles.hidden}>
      <div css={styles.items}>
        {items.map((item, index) => (
          <SetupSelectItem
            image={images[index]}
            name={item}
            price={1200}
            type={selectedType}
          />
        ))}
      </div>
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

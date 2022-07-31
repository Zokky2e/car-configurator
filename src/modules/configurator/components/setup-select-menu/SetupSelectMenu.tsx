/** @jsxImportSource @emotion/react */
import { getStorage, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { carWheel, configurationViewAtoms } from "../../../configuration-view";
import { configuratorAtoms } from "../../states";
import { ItemList } from "../setup-menu-item-list";
import { styles } from "./SetupSelectMenu.styles";
interface SelectMenuProps {
  isSelected: boolean;
}
export function SetupSelectMenu(props: SelectMenuProps) {
  const selectedItem = useRecoilValue(configuratorAtoms.selectedItem);
  const selectedType = useRecoilValue(configuratorAtoms.selectedType);
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const model = useRecoilValue(configurationViewAtoms.model);
  const [items, setItems] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  let type: string;
  const setIsSelectedType = useSetRecoilState(sharedAtoms.isSelectMenuOpen);
  const resetSelectedType = useResetRecoilState(configuratorAtoms.selectedType);
  const setWheels = useSetRecoilState(configurationViewAtoms.wheels);
  const setWheelsPicture = useSetRecoilState(
    configurationViewAtoms.wheelsPicture
  );
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setColorExteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorExteriorPicture
  );
  const setInteriorColor = useSetRecoilState(
    configurationViewAtoms.colorInterior
  );
  const setColorInteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorInteriorPicture
  );
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
    if (selectedType === "Wheels") {
      setWheels(selectedItem.name as carWheel);
      setWheelsPicture(selectedItem.image);
    } else if (selectedType === "Paint Color") {
      setExteriorColor(selectedItem.name);
      setColorExteriorPicture(selectedItem.image);
    } else {
      setInteriorColor(selectedItem.name);
      setColorInteriorPicture(selectedItem.image);
    }
    resetSelectedType();
    setIsSelectedType(false);
  }
  function handleCancel() {
    resetSelectedType();
    setIsSelectedType(false);
  }
  return (
    <div css={props.isSelected ? styles.container : styles.hidden}>
      <div css={styles.title}>
        <p>{selectedType}</p>
        <button onClick={handleCancel}>X</button>
      </div>
      <div css={styles.items}>
        <ItemList images={images} items={items} selectedType={selectedType} />
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

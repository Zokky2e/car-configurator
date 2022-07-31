/** @jsxImportSource @emotion/react */

import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../../states";
import { typeSelect } from "../../types";
import { SetupSelectItem } from "../setup-select-item";
import { styles } from "./ItemList.styles";

interface ItemListProps {
  images: string[];
  items: string[];
  selectedType: typeSelect;
}

export function ItemList(props: ItemListProps) {
  const setSelecteditem = useSetRecoilState(configuratorAtoms.selectedItem);
  function handleSelect(item: string, image: string) {
    const selectedName = item.substring(
      item.lastIndexOf("=") + 1,
      item.lastIndexOf(".")
    );
    const selectedImage = image;
    const selectedPrice = 1200;
    setSelecteditem({
      image: selectedImage,
      name: selectedName,
      price: selectedPrice,
    });
  }
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <button
            css={styles.container}
            onClick={(event) => {
              handleSelect(item, props.images[index]);
            }}
            key={item}
          >
            <SetupSelectItem
              image={props.images[index]}
              name={item}
              price={1200}
              type={props.selectedType}
            />
          </button>
        );
      })}
    </div>
  );
}

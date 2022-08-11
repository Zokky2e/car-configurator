/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { configurationViewAtoms } from "../../../configuration-view";
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
  const [itemPrice, setItemPrice] = useState<number>(0);

  const setWheelsPrice = useSetRecoilState(configurationViewAtoms.wheelsPrice);
  const setExteriorPrice = useSetRecoilState(
    configurationViewAtoms.colorExteriorPrice
  );
  const setInteriorPrice = useSetRecoilState(
    configurationViewAtoms.colorInteriorPrice
  );

  const setSelecteditem = useSetRecoilState(configuratorAtoms.selectedItem);
  const setSelectedColorInterior = useSetRecoilState(
    configuratorAtoms.selectedColorInterior
  );
  const setSelectedColorExterior = useSetRecoilState(
    configuratorAtoms.selectedColor
  );
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);

  useEffect(() => {
    if (props.selectedType === "Wheels") {
      setItemPrice(100);
    } else if (props.selectedType === "Paint Color") {
      setItemPrice(1200);
    } else {
      setItemPrice(400);
    }
  }, [props.selectedType]);

  function handleSelect(item: string, image: string, price: number) {
    const selectedName = item.substring(
      item.lastIndexOf("=") + 1,
      item.lastIndexOf(".")
    );
    const selectedImage = image;
    if (props.selectedType === "Wheels") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSelectedWheels(selectedName);
      setWheelsPrice(price);
    } else if (props.selectedType === "Paint Color") {
      setSelectedColorExterior(selectedName);
      setExteriorPrice(price);
    } else {
      setSelectedColorInterior(selectedName);
      setInteriorPrice(price);
    }
    setSelecteditem({
      image: selectedImage,
      name: selectedName,
      price: price,
    });
  }
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <button
            css={styles.container}
            onClick={(event) => {
              handleSelect(
                item,
                props.images[index],
                index === 0 ? 0 : itemPrice
              );
            }}
            key={item}
          >
            <SetupSelectItem
              image={props.images[index]}
              name={item}
              price={index === 0 ? 0 : itemPrice}
              type={props.selectedType}
            />
          </button>
        );
      })}
    </div>
  );
}

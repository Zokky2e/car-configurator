/** @jsxImportSource @emotion/react */
import { typeSelect } from "../../types";
import { styles } from "./SetupSelectItem.styles";
import { ReactComponent as Success } from "../../../../shared/assets/Success.svg";
import { useRecoilValue } from "recoil";
import { configuratorAtoms } from "../../states";
import { useEffect, useState } from "react";
import { useStorageImage } from "../../../../shared";
interface ItemProps {
  image: string;
  name: string;
  price: number;
  type: typeSelect;
}

export function SetupSelectItem(props: ItemProps) {
  const selectedColorInterior = useRecoilValue(
    configuratorAtoms.selectedColorInterior
  );
  const selectedColorExterior = useRecoilValue(configuratorAtoms.selectedColor);
  const selectedWheels = useRecoilValue(configuratorAtoms.selectedWheels);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, isLoading } = useStorageImage(props.image);
  const name = props.name.substring(
    props.name.lastIndexOf("=") + 1,
    props.name.lastIndexOf(".")
  );

  useEffect(() => {
    if (
      selectedColorExterior === name ||
      selectedColorInterior === name ||
      selectedWheels === name
    )
      setIsSelected(true);
    else {
      setIsSelected(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColorInterior, selectedColorExterior, selectedWheels]);
  return (
    <div css={styles.container}>
      <div css={styles.image}>
        <img
          css={
            props.type === "Wheels"
              ? styles.noBorderRadius
              : styles.borderRadius
          }
          src={image}
          id={props.name}
          alt="type"
        />
        {isSelected ? (
          <p css={styles.successIcon}>
            <Success />
          </p>
        ) : (
          <></>
        )}
      </div>
      <div css={styles.text}>
        <p>{name}</p>
        <p>{`${props.price.toLocaleString()} €`}</p>
      </div>
    </div>
  );
}

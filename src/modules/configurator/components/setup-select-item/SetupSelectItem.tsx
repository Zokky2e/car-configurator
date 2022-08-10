/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { typeSelect } from "../../types";
import { styles } from "./SetupSelectItem.styles";
import { ReactComponent as Success } from "../../../../shared/assets/Success.svg";
import { useRecoilValue } from "recoil";
import { configuratorAtoms } from "../../states";
import { useEffect, useState } from "react";
interface ItemProps {
  image: string;
  name: string;
  price: number;
  type: typeSelect;
}

export function SetupSelectItem(props: ItemProps) {
  const selectedColorInterior = useRecoilValue(
    configuratorAtoms.selectedColorInterier
  );
  const selectedColorExterior = useRecoilValue(configuratorAtoms.selectedColor);
  const selectedWheels = useRecoilValue(configuratorAtoms.selectedWheels);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  const name = props.name.substring(
    props.name.lastIndexOf("=") + 1,
    props.name.lastIndexOf(".")
  );
  getDownloadURL(gsReference).then((url) => {
    const img = document.getElementById(props.name);
    img?.setAttribute("src", url);
  });
  useEffect(() => {
    if (
      selectedColorExterior === name ||
      selectedColorInterior === name ||
      selectedWheels === name
    )
      setIsSelected(true);
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

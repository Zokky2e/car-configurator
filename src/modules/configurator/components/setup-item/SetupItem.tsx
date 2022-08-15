/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from "recoil";
import { sharedAtoms, useStorageImage } from "../../../../shared";
import { configuratorAtoms } from "../../states";
import { typeSelect } from "../../types";
import { styles } from "./SetupItem.styles";
import { ReactComponent as Success } from "../../../../shared/assets/Success.svg";

interface ItemProps {
  image: string;
  name: string;
  type: typeSelect;
}

export function SetupItem(props: ItemProps) {
  const setIsSelectedType = useSetRecoilState(sharedAtoms.isSelectMenuOpen);
  const setSelectedType = useSetRecoilState(configuratorAtoms.selectedType);
  const setSelecteditem = useSetRecoilState(configuratorAtoms.selectedItem);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, isLoading } = useStorageImage(props.image);
  function handleSelect() {
    setSelecteditem({
      image: props.image,
      name: props.name,
      price: 0,
    });
    setSelectedType(props.type);
    setIsSelectedType(true);
  }
  return (
    <button
      css={styles.container}
      onClick={() => {
        handleSelect();
      }}
    >
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
        <p css={styles.successIcon}>
          <Success />
        </p>
      </div>
      <div css={styles.text}>
        <p>{props.name}</p>
        <p>{props.type}</p>
      </div>
    </button>
  );
}

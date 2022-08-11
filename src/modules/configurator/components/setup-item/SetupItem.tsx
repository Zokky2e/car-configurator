/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
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
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  const setIsSelectedType = useSetRecoilState(sharedAtoms.isSelectMenuOpen);
  const setSelectedType = useSetRecoilState(configuratorAtoms.selectedType);
  const setSelecteditem = useSetRecoilState(configuratorAtoms.selectedItem);

  getDownloadURL(gsReference).then((url) => {
    const img = document.getElementById(props.name);
    img?.setAttribute("src", url);
  });
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

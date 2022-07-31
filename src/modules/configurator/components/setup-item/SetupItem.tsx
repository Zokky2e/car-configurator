/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configuratorAtoms } from "../../states";
import { typeSelect } from "../../types";
import { styles } from "./SetupItem.styles";

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
  getDownloadURL(gsReference).then((url) => {
    const img = document.getElementById(props.name);
    img?.setAttribute("src", url);
  });
  function handleSelect() {
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
      <div>
        <img
          css={
            props.type === "Wheels"
              ? styles.noBorderRadius
              : styles.borderRadius
          }
          id={props.name}
          alt="type"
        />
      </div>
      <div css={styles.text}>
        <p>{props.name}</p>
        <p>{props.type}</p>
      </div>
    </button>
  );
}

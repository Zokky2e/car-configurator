/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { typeSelect } from "../../types";
import { styles } from "./SetupSelectItem.styles";

interface ItemProps {
  image: string;
  name: string;
  price: number;
  type: typeSelect;
}

export function SetupSelectItem(props: ItemProps) {
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
  function handleSelect() {}
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
        <p>{name}</p>
        <p>{`${props.price.toLocaleString()} €`}</p>
      </div>
    </button>
  );
}

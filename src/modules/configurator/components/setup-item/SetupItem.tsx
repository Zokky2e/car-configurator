/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { styles } from "./SetupItem.styles";

interface ItemProps {
  image: string;
  name: string;
  type: string;
}

export function SetupItem(props: ItemProps) {
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  getDownloadURL(gsReference).then((url) => {
    const img = document.getElementById(props.name);
    img?.setAttribute("src", url);
  });
  return (
    <button css={styles.container}>
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

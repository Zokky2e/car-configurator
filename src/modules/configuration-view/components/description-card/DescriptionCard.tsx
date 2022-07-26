/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { styles } from "./DescriptionCard.styles";

interface DescriptionProps {
  image: string;
  name: string;
  price: number;
}

export function DescriptionCard(props: DescriptionProps) {
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  getDownloadURL(gsReference).then((url) => {
    const img = document.getElementById(props.name);
    img?.setAttribute("src", url);
  });

  return (
    <article css={styles.container}>
      <div>
        <img id={props.name} css={styles.image} alt="color" />
        <p>{props.name}</p>
      </div>
      <div>
        <p css={styles.priceText}>{`${props.price.toLocaleString()} €`}</p>
      </div>
    </article>
  );
}

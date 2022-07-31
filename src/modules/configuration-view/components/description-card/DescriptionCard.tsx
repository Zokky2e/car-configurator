/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect } from "react";
import { item } from "../../types";
import { styles } from "./DescriptionCard.styles";

export function DescriptionCard(props: item) {
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  useEffect(() => {
    if (gsReference.fullPath === "empty") return;
    getDownloadURL(gsReference)
      .then((url) => {
        const img = document.getElementById(props.name);
        img?.setAttribute("src", url);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsReference]);

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

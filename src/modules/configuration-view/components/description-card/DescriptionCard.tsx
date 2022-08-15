/** @jsxImportSource @emotion/react */

import { useStorageImage } from "../../../../shared";
import { item } from "../../types";
import { styles } from "./DescriptionCard.styles";

export function DescriptionCard(props: item) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, isLoading } = useStorageImage(props.image);

  return (
    <article css={styles.container}>
      <div>
        <img id={props.name} css={styles.image} src={image} alt="color" />
        <p>{props.name}</p>
      </div>
      <div>
        <p css={styles.priceText}>{`${props.price.toLocaleString()} €`}</p>
      </div>
    </article>
  );
}

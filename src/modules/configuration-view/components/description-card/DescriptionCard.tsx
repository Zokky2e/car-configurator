/** @jsxImportSource @emotion/react */

import { styles } from "./DescriptionCard.styles";

interface DescriptionProps {
  color: string;
  name: string;
  price: number;
}

export function DescriptionCard(props: DescriptionProps) {
  return (
    <article css={styles.container}>
      <div>
        <img css={styles.image} src={props.color} alt="color" />
        <p>{props.name}</p>
      </div>
      <div>
        <p css={styles.priceText}>{`${props.price.toLocaleString()} €`}</p>
      </div>
    </article>
  );
}

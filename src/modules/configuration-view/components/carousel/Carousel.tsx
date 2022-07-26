/** @jsxImportSource @emotion/react */

import { styles } from "./Carousel.styles";

export function Carousel() {
  return (
    <section css={styles.container}>
      <div css={styles.image}>Images</div>
      <div>Scroller</div>
    </section>
  );
}

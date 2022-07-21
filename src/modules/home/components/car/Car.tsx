/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useDate } from "../../hooks";
import { CarInfo } from "../../types";
import { styles } from "./Car.styles";
export function Car(props: CarInfo) {
  const date = useDate(new Date(props.dateCreated));
  const [isOptionsMenu, setIsOptionsMenu] = useState<boolean>(false);
  return (
    <li css={styles.item}>
      <div css={styles.info}>
        <img css={styles.picture} src={props.picture} alt="car" />
        <article>
          <p css={[styles.year, styles.uppercase]}>{props.year}</p>
          <p css={[styles.title, styles.uppercase]}>{props.name}</p>
          <p css={[styles.color, styles.uppercase]}>{props.color}</p>
          <p css={styles.dateCreated}>{`Created ${date}`}</p>
        </article>
      </div>
      <div css={styles.options}>
        <button
          onClick={() => setIsOptionsMenu(!isOptionsMenu)}
          css={styles.optionsButton}
        >
          dots
        </button>
        <ul
          css={[
            styles.optionsMenu,
            isOptionsMenu ? styles.visible : styles.hidden,
          ]}
        >
          <button>Edit configuration</button>
          <button>Delete</button>
        </ul>
      </div>
    </li>
  );
}

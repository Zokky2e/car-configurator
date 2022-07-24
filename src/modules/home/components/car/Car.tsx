/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { useDate } from "../../hooks";
import { CarInfo } from "../../types";
import { styles } from "./Car.styles";
import loadingImage from "../../assets/loading.png";
export function Car(props: CarInfo) {
  const date = useDate(new Date(props.dateCreated));
  const [isOptionsMenu, setIsOptionsMenu] = useState<boolean>(false);
  const storage = getStorage();
  const gsReference = ref(storage, props.picture);
  const id = props.id;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  getDownloadURL(gsReference)
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      const img = document.getElementById(id);
      img?.setAttribute("src", url);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })
    .catch((error) => {
      console.log("error");
    });
  return (
    <li css={styles.item}>
      <div css={styles.info}>
        {isLoading ? (
          <img
            css={[styles.picture, styles.loading]}
            src={loadingImage}
            alt="car"
          />
        ) : (
          <img id={id} css={styles.picture} alt="car" />
        )}
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

/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { useDate } from "../../hooks";
import { CarInfo } from "../../types";
import { styles } from "./Car.styles";
import loadingImage from "../../assets/loading.png";
import { useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { configurationViewAtoms } from "../../../configuration-view";
import { useNavigate } from "react-router-dom";
export function Car(props: CarInfo) {
  const navigate = useNavigate();
  const date = useDate(new Date(props.dateCreated));
  const [isOptionsMenu, setIsOptionsMenu] = useState<boolean>(false);
  const storage = getStorage();
  const gsReference = ref(storage, props.picture);
  const id = props.id;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setCurrentStep = useSetRecoilState(sharedAtoms.currentStep);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);
  getDownloadURL(gsReference)
    .then((url) => {
      const img = document.getElementById(id);
      img?.setAttribute("src", url);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log("error");
    });
  function handleEditConfiguration() {
    setCurrentStep(3);
    setIsNewConfiguration(false);
    setModel(props.model);
    setName(props.name);
    setExteriorColor(props.color);
    navigate({
      pathname: "/configuration",
    });
  }
  function handleDelete() {}
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
          <button onClick={handleEditConfiguration}>Edit configuration</button>
          <button onClick={handleDelete}>Delete</button>
        </ul>
      </div>
    </li>
  );
}

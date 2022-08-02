/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useDate } from "../../hooks";
import { CarInfo } from "../../types";
import { styles } from "./Car.styles";
import loadingImage from "../../assets/loading.png";
import { useSetRecoilState } from "recoil";
import { configurationViewAtoms } from "../../../configuration-view";
import { useNavigate } from "react-router-dom";
import { Loading, sharedAtoms } from "../../../../shared";
export function Car(props: CarInfo) {
  const navigate = useNavigate();
  const date = useDate(new Date(props.dateCreated));
  const [isOptionsMenu, setIsOptionsMenu] = useState<boolean>(false);
  const storage = getStorage();
  const gsReference = ref(storage, props.picture);
  const id = props.id;
  const [image, setImage] = useState<string>(loadingImage);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setCurrentStep = useSetRecoilState(sharedAtoms.currentStep);
  const setPreviousStep = useSetRecoilState(sharedAtoms.previousStep);
  const setIsNewConfiguration = useSetRecoilState(
    sharedAtoms.isNewConfiguration
  );
  const setName = useSetRecoilState(configurationViewAtoms.name);
  const setExteriorColor = useSetRecoilState(
    configurationViewAtoms.colorExterior
  );
  const setInteriorColor = useSetRecoilState(
    configurationViewAtoms.colorInterior
  );
  const setModel = useSetRecoilState(configurationViewAtoms.model);
  useEffect(() => {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsReference]);
  function handleEditConfiguration() {
    setCurrentStep(3);
    setPreviousStep(1);
    setIsNewConfiguration(false);
    setModel(props.model);
    setName(props.name);
    setExteriorColor(props.color);
    setInteriorColor(props.colorInterior);
    setTimeout(() => {
      navigate({
        pathname: "/configuration",
      });
    }, 500);
  }
  function handleDelete() {}
  return (
    <li css={styles.item}>
      <div css={styles.info}>
        {isLoading ? (
          <Loading />
        ) : (
          <img
            id={id}
            src={image}
            css={[
              isLoading ? [styles.loading, styles.picture] : styles.picture,
            ]}
            alt="car"
          />
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

/** @jsxImportSource @emotion/react */

import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { db } from "../../../../firebase";
import { Info, sharedAtoms } from "../../../../shared";
import { CarInfo } from "../../../home";
import {
  configurationViewAtoms,
  configurationViewSelectors,
} from "../../states";
import { styles } from "./SaveConfigurationCard.styles";

export function SaveConfigurationCard() {
  const navigate = useNavigate();
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const totalPrice = useRecoilValue(configurationViewSelectors.totalPrice);
  const color = useRecoilValue(configurationViewAtoms.colorExterior);
  const colorInterior = useRecoilValue(configurationViewAtoms.colorInterior);
  const model = useRecoilValue(configurationViewAtoms.model);
  const id = useRecoilValue(configurationViewAtoms.id);
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const picture = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Side, Color=${color}, Wheel Style=${wheels}.png`;
  const user = useRecoilValue(sharedAtoms.user);
  const CarInfoConverter = {
    toFirestore: (car: CarInfo) => {
      return {
        id: car.id,
        model: car.model,
        picture: car.picture,
        year: car.year,
        name: car.name,
        color: car.color,
        colorInterior: car.colorInterior,
        wheels: car.wheels,
        dateCreated: car.dateCreated,
      };
    },
    fromFirestore: (snapshot: { data: () => any }) => {
      const data = snapshot.data();
      const item: CarInfo = {
        id: data.id,
        model: data.model,
        picture: data.picture,
        year: data.year,
        name: data.name,
        color: data.color,
        colorInterior: data.colorInterior,
        wheels: data.wheels,
        dateCreated: data.dateCreated,
      };
      return item;
    },
  };
  async function handleSave() {
    let collectionRef;
    const today = new Date();
    const dateCreated =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    if (id === "new") {
      collectionRef = collection(db, user.uid).withConverter(CarInfoConverter);
      await setDoc(
        doc(collectionRef),
        {
          id,
          model,
          picture,
          year,
          name,
          color,
          colorInterior,
          wheels,
          dateCreated,
        },
        { merge: true }
      ).then(() => {
        navigate({ pathname: "/" });
      });
    } else {
      collectionRef = collection(db, user.uid).withConverter(CarInfoConverter);
      await setDoc(
        doc(collectionRef, "/" + id),
        {
          id,
          model,
          picture,
          year,
          name,
          color,
          colorInterior,
          wheels,
          dateCreated,
        },
        { merge: true }
      ).then(() => {
        navigate({ pathname: "/" });
      });
    }
  }
  return (
    <footer css={styles.container}>
      <div css={styles.description}>
        <p>{year}</p>
        <p>{name}</p>
      </div>
      <div css={styles.price}>
        <div css={styles.text}>
          <p css={styles.uppercase}>Total</p>
          <Info message={"Value calculated in euros"} />
        </div>
        <p>{`${totalPrice.toLocaleString()} €`}</p>
        <button css={styles.button} onClick={handleSave}>
          Save your configuration
        </button>
      </div>
    </footer>
  );
}

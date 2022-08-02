/** @jsxImportSource @emotion/react */

import { collection, doc, setDoc } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { db } from "../../../../firebase";
import { sharedAtoms } from "../../../../shared";
import { CarInfo } from "../../../home";
import { configurationViewAtoms } from "../../states";
import { styles } from "./SaveConfigurationCard.styles";

export function SaveConfigurationCard() {
  const name = useRecoilValue(configurationViewAtoms.name);
  const year = useRecoilValue(configurationViewAtoms.year);
  const totalPrice = useRecoilValue(configurationViewAtoms.totalPrice);
  const color = useRecoilValue(configurationViewAtoms.colorExterior);
  const colorInterior = useRecoilValue(configurationViewAtoms.colorInterior);
  const model = useRecoilValue(configurationViewAtoms.model);
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
    const today = new Date();
    const dateCreated =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const id = today.toJSON();
    const collectionRef = collection(db, user.uid).withConverter(
      CarInfoConverter
    );
    await setDoc(doc(collectionRef), {
      id,
      model,
      picture,
      year,
      name,
      color,
      colorInterior,
      wheels,
      dateCreated,
    }).then((doc) => {
      console.log(doc);
    });
  }
  return (
    <footer css={styles.container}>
      <div css={styles.description}>
        <p>{year}</p>
        <p>{name}</p>
      </div>
      <div css={styles.price}>
        <p>Total</p>
        <p>{`${totalPrice.toLocaleString()} €`}</p>
        <button css={styles.button} onClick={handleSave}>
          Save your configuration
        </button>
      </div>
    </footer>
  );
}

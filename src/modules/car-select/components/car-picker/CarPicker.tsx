/** @jsxImportSource @emotion/react */

import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { CarCardInfo } from "../../types";
import { CarCard } from "../car-card";
import { styles } from "./CarPicker.styles";
export function CarPicker() {
  const [Cars, setCars] = useState<CarCardInfo[]>([]);
  const CarCardInfoConverter = {
    toFirestore: (car: CarCardInfo) => {
      return {
        docName: car.docName,
        picture: car.picture,
        year: car.year,
        name: car.name,
        colorExterior: car.colorExterior,
        colorInterior: car.colorInterior,
      };
    },
    fromFirestore: (snapshot: { data: () => any }) => {
      const data = snapshot.data();
      const item: CarCardInfo = {
        docName: data.docName,
        picture: data.picture,
        year: data.year,
        name: data.name,
        colorExterior: data.colorExterior,
        colorInterior: data.colorInterior,
      };
      return item;
    },
  };
  async function fetchCarSelectList() {
    const q = query(collection(db, "car-select-list"));
    onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        return;
      }
      const docsItems: CarCardInfo[] = [];
      querySnapshot.docs.forEach((value) => {
        const item = CarCardInfoConverter.fromFirestore(value);
        docsItems.push(item);
      });
      setCars(docsItems);
    });
  }
  useEffect(() => {
    fetchCarSelectList();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section>
      <h2 css={styles.title}>Configure a car</h2>
      <p css={styles.description}>
        Pick you favorite model and start configuring.
      </p>
      <ul css={styles.carList}>
        {Cars.map(
          ({ docName, picture, year, name, colorExterior, colorInterior }) => (
            <CarCard
              docName={docName}
              key={name}
              picture={picture}
              year={year}
              name={name}
              colorExterior={colorExterior}
              colorInterior={colorInterior}
            />
          )
        )}
      </ul>
    </section>
  );
}

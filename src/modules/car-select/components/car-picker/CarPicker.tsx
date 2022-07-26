/** @jsxImportSource @emotion/react */

import { Cars } from "../../const";
import { CarCard } from "../car-card";
import { styles } from "./CarPicker.styles";
export function CarPicker() {
  return (
    <section>
      <h2 css={styles.title}>Configure a car</h2>
      <p css={styles.description}>
        Pick you favorite model and start configuring.
      </p>
      <ul css={styles.carList}>
        {Cars.map(({ docName, picture, year, name, color }) => (
          <CarCard
            docName={docName}
            key={name}
            picture={picture}
            year={year}
            name={name}
            color={color}
          />
        ))}
      </ul>
    </section>
  );
}

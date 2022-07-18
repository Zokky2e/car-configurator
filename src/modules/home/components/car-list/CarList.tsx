/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { Cars } from "../../const";
import { Car } from "../car/Car";
import { styles } from "./CarList.styles";
export function CarList() {
  const setConfigureButton = useSetRecoilState(sharedAtoms.configureButton);
  const resetConfigureButton = useResetRecoilState(sharedAtoms.configureButton);

  useEffect(() => {
    setConfigureButton(true);
    return () => {
      resetConfigureButton();
    };
  });
  return (
    <>
      <article>
        <ul css={styles.carList}>
          {Cars.map(({ picture, year, name, color, dateCreated }) => (
            <Car
              key={name}
              picture={picture}
              year={year}
              name={name}
              color={color}
              dateCreated={dateCreated}
            />
          ))}
        </ul>
      </article>
    </>
  );
}

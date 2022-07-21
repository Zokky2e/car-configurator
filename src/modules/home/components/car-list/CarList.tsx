/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { homeAtoms } from "../../states";
import { Car } from "../car/Car";
import { styles } from "./CarList.styles";
export function CarList() {
  const setConfigureButton = useSetRecoilState(sharedAtoms.configureButton);
  const resetConfigureButton = useResetRecoilState(sharedAtoms.configureButton);
  const savedCarConfigurations = useRecoilValue(
    homeAtoms.savedCarConfigurations
  );
  useEffect(() => {
    setConfigureButton(true);
    return () => {
      resetConfigureButton();
    };
  });
  useEffect(() => {}, [savedCarConfigurations]);
  return (
    <>
      <article>
        <ul css={styles.carList}>
          {savedCarConfigurations.map(
            ({ picture, year, name, color, dateCreated }, id) => (
              <Car
                id={id.toString()}
                key={name}
                picture={picture}
                year={year}
                name={name}
                color={color}
                dateCreated={dateCreated}
              />
            )
          )}
        </ul>
      </article>
    </>
  );
}

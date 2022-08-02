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
            ({
              id,
              picture,
              year,
              model,
              name,
              color,
              colorInterior,
              wheels,
              dateCreated,
            }) => (
              <Car
                id={id}
                model={model}
                key={id}
                picture={picture}
                year={year}
                name={name}
                color={color}
                colorInterior={colorInterior}
                wheels={wheels}
                dateCreated={dateCreated}
              />
            )
          )}
        </ul>
      </article>
    </>
  );
}

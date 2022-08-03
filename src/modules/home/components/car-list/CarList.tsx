/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";
import { homeAtoms } from "../../states";
import { CarInfo } from "../../types";
import { Car } from "../car/Car";
import { styles } from "./CarList.styles";
export function CarList() {
  const setConfigureButton = useSetRecoilState(sharedAtoms.configureButton);
  const resetConfigureButton = useResetRecoilState(sharedAtoms.configureButton);
  const [savedCarConfigurations, setSavedCarConfigurations] = useRecoilState(
    homeAtoms.savedCarConfigurations
  );
  useEffect(() => {
    setConfigureButton(true);
    return () => {
      resetConfigureButton();
    };
  });
  function sortByDateCreated(a: CarInfo, b: CarInfo) {
    if (a.dateCreated < b.dateCreated) return -1;
    if (a.dateCreated > b.dateCreated) return 1;
    return 0;
  }
  useEffect(() => {
    setSavedCarConfigurations(savedCarConfigurations.sort(sortByDateCreated));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedCarConfigurations]);
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

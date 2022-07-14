import { useEffect } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { sharedAtoms } from "../../../../shared";

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
        <ul>
          <li>Mapiranje auta iz baze</li>
        </ul>
      </article>
    </>
  );
}

import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { SetupMenu } from "../modules/configurator";
import { Options, sharedAtoms } from "../shared";

export function Configurator() {
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  useEffect(() => {
    document.title = `Configurator - ${
      currentStep === 1 ? "Exterior" : "Interior"
    }`;
  }, [currentStep]);
  return (
    <>
      <Options />
      <SetupMenu />
    </>
  );
}

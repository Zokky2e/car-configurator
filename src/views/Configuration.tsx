import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  ConfigurationInfo,
  configurationViewAtoms,
  Details,
  SaveConfigurationCard,
  useStorageImage,
} from "../modules";
import { Carousel, Options, sharedAtoms } from "../shared";

export function Configuration() {
  const model = useRecoilValue(configurationViewAtoms.model);
  const colorExterior = useRecoilValue(configurationViewAtoms.colorExterior);
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const colorInterior = useRecoilValue(configurationViewAtoms.colorInterior);
  const images = useStorageImage(model, colorExterior, wheels, colorInterior);
  const [isFinalStep, setIsFinalStep] = useState<boolean>(false);
  const setExteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorExteriorPicture
  );
  const setWheelsPicture = useSetRecoilState(
    configurationViewAtoms.wheelsPicture
  );
  const setInteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorInteriorPicture
  );
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const previousStep = useRecoilValue(sharedAtoms.previousStep);
  useEffect(() => {
    setExteriorPicture(images.exteriorColor);
    setWheelsPicture(images.carWheels);
    setInteriorPicture(images.interiorColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, colorExterior, wheels, colorExterior]);
  useEffect(() => {
    if (previousStep === 2 && currentStep === 3) {
      setIsFinalStep(true);
      return;
    }
    setIsFinalStep(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);
  return (
    <>
      <Options />
      <Carousel />
      <ConfigurationInfo />
      <Details />
      {isFinalStep ? <SaveConfigurationCard /> : <></>}
    </>
  );
}

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Carousel,
  ConfigurationInfo,
  configurationViewAtoms,
  Details,
  Options,
  useStorageImage,
} from "../modules";

export function Configuration() {
  const model = useRecoilValue(configurationViewAtoms.model);
  const colorExterior = useRecoilValue(configurationViewAtoms.colorExterior);
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const colorInterior = useRecoilValue(configurationViewAtoms.colorInterior);

  const images = useStorageImage(model, colorExterior, wheels, colorInterior);
  const setExteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorExteriorPicture
  );
  const setWheelsPicture = useSetRecoilState(
    configurationViewAtoms.wheelsPicture
  );
  const setInteriorPicture = useSetRecoilState(
    configurationViewAtoms.colorInteriorPicture
  );
  useEffect(() => {
    setExteriorPicture(images.exteriorColor);
    setWheelsPicture(images.carWheels);
    setInteriorPicture(images.interiorColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, colorExterior, wheels, colorExterior]);

  return (
    <>
      <Options />
      <Carousel />
      <ConfigurationInfo />
      <Details />
    </>
  );
}

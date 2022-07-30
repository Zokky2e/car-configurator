import { carModel, carWheel } from "../types";

export function useStorageImage(
  model: carModel,
  color: string,
  wheels: carWheel,
  colorInterior: string
) {
  const exteriorColor = `gs://car-configurator-5352d.appspot.com/exterior-color/Car=${model.toUpperCase()} Color=${color}.png`;

  const carWheels = `gs://car-configurator-5352d.appspot.com/${model}-wheel/Car=${model.toUpperCase()}, Style=${wheels}.png`;

  const interiorColor = `gs://car-configurator-5352d.appspot.com/interior-color/Car=${model.toUpperCase()} Color=${colorInterior}.png`;
  return { exteriorColor, carWheels, interiorColor };
}

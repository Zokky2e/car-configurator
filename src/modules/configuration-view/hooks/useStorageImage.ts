import { carModel, carWheel } from "../types";

export function useStorageImage(
  model: carModel,
  color: string,
  wheels: carWheel,
  colorInterior: string
) {
  const colorExterior =
    color === "Blue" ? (model === "rs5" ? "Turbo Blue" : "Ultra Blue") : color;
  const exteriorColor = `gs://car-configurator-5352d.appspot.com/exterior-color/Color=${colorExterior}.png`;

  const carWheels = `gs://car-configurator-5352d.appspot.com/${model}-wheel/Car=${model.toUpperCase()}, Style=${wheels}.png`;

  const interiorColor = `gs://car-configurator-5352d.appspot.com/interior-color/Color=${colorInterior}.png`;
  return { exteriorColor, carWheels, interiorColor };
}

import { useState } from "react";
import { carModel, carWheel } from "../../modules";

export function useCarouselImage() {
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  function getImageExteriorUrl(
    model: carModel,
    color: string,
    wheels: carWheel
  ) {
    const backLeft = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Back Left, Color=${color}, Wheel Style=${wheels}.png`;
    const back = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Back, Color=${color}, Wheel Style=${wheels}.png`;
    const frontLeft = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Front Left, Color=${color}, Wheel Style=${wheels}.png`;
    const front = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Front, Color=${color}, Wheel Style=${wheels}.png`;
    const side = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Side, Color=${color}, Wheel Style=${wheels}.png`;
    setImageUrl([frontLeft, side, backLeft, back, front]);
  }
  function getImageInteriorUrl(model: carModel, color: string) {
    const seats = `gs://car-configurator-5352d.appspot.com/${model}-interior/Car=${model.toUpperCase()}, Color=${color}, View=Seats.png`;
    const dash = `gs://car-configurator-5352d.appspot.com/${model}-interior/Car=${model.toUpperCase()}, Color=${color}, View=Dash.png`;
    setImageUrl([seats, dash]);
  }
  return {
    images: imageUrl,
    getImageExteriorUrl: getImageExteriorUrl,
    getImageInteriorUrl: getImageInteriorUrl,
  };
}

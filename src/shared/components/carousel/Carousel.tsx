/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../../modules/configuration-view/states";
import { carModel, carWheel } from "../../../modules/configuration-view/types";
import { sharedAtoms } from "../../states";
import { Image } from "../carousel-image";
import { styles } from "./Carousel.styles";
import { ReactComponent as ArrowLeft } from "../../assets/Arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/Arrow-right.svg";
import { configuratorAtoms } from "../../../modules/configurator";
export function Carousel() {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const model = useRecoilValue(configurationViewAtoms.model);
  const color = useRecoilValue(configuratorAtoms.selectedColor);
  const colorInterior = useRecoilValue(configuratorAtoms.selectedColorInterior);
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const isInterior = currentStep === 2 ? true : false;
  const wheels = useRecoilValue(configuratorAtoms.selectedWheels);
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
    return [backLeft, back, frontLeft, front, side];
  }
  function getImageInteriorUrl(model: carModel, color: string) {
    const seats = `gs://car-configurator-5352d.appspot.com/${model}-interior/Car=${model.toUpperCase()}, Color=${color}, View=Seats.png`;
    const dash = `gs://car-configurator-5352d.appspot.com/${model}-interior/Car=${model.toUpperCase()}, Color=${color}, View=Dash.png`;
    return [seats, dash];
  }
  useEffect(() => {
    if (isInterior) {
      setSlideIndex(1);
      setImageUrl(getImageInteriorUrl(model, colorInterior));
      return;
    }
    setImageUrl(getImageExteriorUrl(model, color, wheels as carWheel));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInterior, wheels, color, colorInterior]);

  function moveLeft() {
    if (slideIndex <= 1) {
      setSlideIndex(imageUrl.length);
      return;
    }
    setSlideIndex(slideIndex - 1);
  }
  function moveRight() {
    if (slideIndex >= imageUrl.length) {
      setSlideIndex(1);
      return;
    }
    setSlideIndex(slideIndex + 1);
  }
  return (
    <section css={styles.container}>
      <div css={styles.image}>
        {imageUrl.map((image, id) => (
          <Image key={id} image={image} index={slideIndex} id={id} />
        ))}
      </div>
      <div css={styles.slider}>
        <button onClick={moveLeft}>{<ArrowLeft />}</button>
        <p css={styles.firstLetter}>{`${slideIndex} / ${imageUrl.length}`}</p>
        <button onClick={moveRight}>{<ArrowRight />}</button>
      </div>
    </section>
  );
}

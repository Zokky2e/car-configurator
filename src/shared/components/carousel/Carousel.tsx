/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../../modules/configuration-view/states";
import { carWheel } from "../../../modules/configuration-view/types";
import { sharedAtoms } from "../../states";
import { Image } from "../carousel-image";
import { styles } from "./Carousel.styles";
import { ReactComponent as ArrowLeft } from "../../assets/Arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/Arrow-right.svg";
import { configuratorAtoms } from "../../../modules/configurator";
import { useCarouselImage } from "../../hooks";
export function Carousel() {
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const model = useRecoilValue(configurationViewAtoms.model);
  const color = useRecoilValue(configuratorAtoms.selectedColor);
  const colorInterior = useRecoilValue(configuratorAtoms.selectedColorInterior);
  const currentStep = useRecoilValue(sharedAtoms.currentStep);
  const isInterior = currentStep === 2 ? true : false;
  const wheels = useRecoilValue(configuratorAtoms.selectedWheels);
  const { images, getImageExteriorUrl, getImageInteriorUrl } =
    useCarouselImage();

  useEffect(() => {
    if (isInterior) {
      setSlideIndex(1);
      getImageInteriorUrl(model, colorInterior);
      return;
    }
    getImageExteriorUrl(model, color, wheels as carWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInterior, wheels, color, colorInterior]);

  function moveLeft() {
    if (slideIndex <= 1) {
      setSlideIndex(images.length);
      return;
    }
    setSlideIndex(slideIndex - 1);
  }
  function moveRight() {
    if (slideIndex >= images.length) {
      setSlideIndex(1);
      return;
    }
    setSlideIndex(slideIndex + 1);
  }
  return (
    <section css={styles.container}>
      <div css={styles.image}>
        {images.map((image, id) => (
          <Image key={id} image={image} index={slideIndex} id={id} />
        ))}
      </div>
      <div css={styles.slider}>
        <button onClick={moveLeft}>{<ArrowLeft />}</button>
        <p css={styles.numbers}>{`${slideIndex} / ${images.length}`}</p>
        <button onClick={moveRight}>{<ArrowRight />}</button>
      </div>
    </section>
  );
}

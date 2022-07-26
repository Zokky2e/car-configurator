/** @jsxImportSource @emotion/react */

import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { configurationViewAtoms } from "../../states";
import { carModel, carWheel } from "../../types";
import { styles } from "./Carousel.styles";

export function Carousel() {
  const model = useRecoilValue(configurationViewAtoms.model);
  const color = useRecoilValue(configurationViewAtoms.colorExterior);
  const wheels = useRecoilValue(configurationViewAtoms.wheels);
  const imageUrl: string[] = getImageUrl(model, color, wheels);
  function getImageUrl(model: carModel, color: string, wheels: carWheel) {
    const backLeft = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Back Left, Color=${color}, Wheel Style=${wheels}.png`;
    const back = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Back, Color=${color}, Wheel Style=${wheels}.png`;
    const frontLeft = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Front Left, Color=${color}, Wheel Style=${wheels}.png`;
    const front = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Front, Color=${color}, Wheel Style=${wheels}.png`;
    const side = `gs://car-configurator-5352d.appspot.com/${model}-exterior/View=Side, Color=${color}, Wheel Style=${wheels}.png`;
    return [backLeft, back, frontLeft, front, side];
  }
  const storage = getStorage();
  const [slideIndex, setSlideIndex] = useState<number>(1);
  function fetchImage(image: string) {
    const gsReference = ref(storage, image);
    getDownloadURL(gsReference).then((url) => {
      const img = document.getElementById(image);
      img?.setAttribute("src", url);
    });
  }
  function moveLeft() {
    if (slideIndex <= 1) {
      setSlideIndex(5);
      return;
    }
    setSlideIndex(slideIndex - 1);
  }
  function moveRight() {
    if (slideIndex >= 5) {
      setSlideIndex(1);
      return;
    }
    setSlideIndex(slideIndex + 1);
  }
  return (
    <section css={styles.container}>
      <div css={styles.image}>
        {imageUrl.map((image, id) => {
          const finalImage = (
            <div
              key={image}
              css={
                slideIndex === id + 1
                  ? [styles.slide, styles.active]
                  : [styles.slide]
              }
            >
              <img id={image} alt={image} />
            </div>
          );
          fetchImage(image);
          return finalImage;
        })}
      </div>
      <div css={styles.slider}>
        <button onClick={moveLeft}>{"<"}</button>
        <p>{`${slideIndex}/5`}</p>
        <button onClick={moveRight}>{">"}</button>
      </div>
    </section>
  );
}

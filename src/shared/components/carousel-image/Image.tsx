/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { styles } from "./Image.styles";

interface ImageProps {
  image: string;
  index: number;
  id: number;
}

export function Image(props: ImageProps) {
  const [image, setImage] = useState<string>("");
  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  function fetchImage() {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.image]);
  return (
    <div
      key={props.image}
      css={
        props.index === props.id + 1
          ? [styles.slide, styles.active]
          : [styles.slide]
      }
    >
      <img id={props.image} src={image} alt={props.image} />
    </div>
  );
}

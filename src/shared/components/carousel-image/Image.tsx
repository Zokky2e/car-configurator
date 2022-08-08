/** @jsxImportSource @emotion/react */
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { Loading } from "../loading-component";
import { styles } from "./Image.styles";

interface ImageProps {
  image: string;
  index: number;
  id: number;
}

export function Image(props: ImageProps) {
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const storage = getStorage();
  const gsReference = ref(storage, props.image);
  function fetchImage() {
    getDownloadURL(gsReference)
      .then((url) => {
        setImage(url);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <img
          css={[isLoading ? styles.loading : ""]}
          id={props.image}
          src={image}
          alt={props.image}
        />
      )}
    </div>
  );
}

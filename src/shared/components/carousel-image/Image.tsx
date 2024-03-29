/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useStorageImage } from "../../hooks";
import { Loading } from "../loading-component";
import { styles } from "./Image.styles";

interface ImageProps {
  image: string;
  index: number;
  id: number;
}

export function Image(props: ImageProps) {
  const { image, isLoading } = useStorageImage(props.image);

  useEffect(() => {}, [props.image]);
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

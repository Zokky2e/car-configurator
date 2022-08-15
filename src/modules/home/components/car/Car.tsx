/** @jsxImportSource @emotion/react */
import { useDate } from "../../hooks";
import { CarInfo } from "../../types";
import { styles } from "./Car.styles";
import loadingImage from "../../assets/loading.png";
import { Loading, useStorageImage } from "../../../../shared";
import { CarOptionMenu } from "../car-options-menu";
export function Car(props: CarInfo) {
  const date = useDate(new Date(props.dateCreated));
  const picture: string = props.picture;
  const { image, isLoading } = useStorageImage(picture, loadingImage);
  return (
    <li css={styles.item}>
      <div css={styles.info}>
        {isLoading ? (
          <Loading />
        ) : (
          <img
            id={props.id}
            src={image}
            css={[
              isLoading ? [styles.loading, styles.picture] : styles.picture,
            ]}
            alt="car"
          />
        )}
        <article>
          <p css={[styles.year, styles.uppercase]}>{props.year}</p>
          <p css={[styles.title, styles.uppercase]}>{props.name}</p>
          <p css={[styles.color, styles.uppercase]}>{props.color}</p>
          <p css={styles.dateCreated}>{`Created ${date}`}</p>
        </article>
      </div>
      <CarOptionMenu
        id={props.id}
        model={props.model}
        key={props.id}
        picture={props.picture}
        year={props.year}
        name={props.name}
        color={props.color}
        colorInterior={props.colorInterior}
        wheels={props.wheels}
        dateCreated={props.dateCreated}
      />
    </li>
  );
}

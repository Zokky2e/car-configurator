/** @jsxImportSource @emotion/react */
import { useState } from "react";
import {
  container,
  mainMenu,
  navigation,
  configureButton,
} from "./Header.styles";
interface Props {
  onLogin: () => void;
}

export function Header(props: Props) {
  const [emptyState, setEmptyState] = useState<boolean>(true);
  return (
    <header css={container}>
      <div>
        <img src={require("../../assets/logo192.png")} alt="logo" />
      </div>
      <ul css={navigation}>
        <>
          {emptyState ? (
            <button css={configureButton}>Configure a car</button>
          ) : (
            <></>
          )}
        </>

        <button css={mainMenu}>
          <img src={require("../../assets/hamburger.png")} alt="logo" />
        </button>
      </ul>
    </header>
  );
}

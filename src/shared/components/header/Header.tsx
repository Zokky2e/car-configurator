/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sharedAtoms } from "../../states";
import {
  container,
  hamburger,
  navigation,
  configureButton,
  mainMenu,
} from "./Header.styles";
interface Props {
  isLoggedIn: boolean;
  onLogin: () => void;
}

export function Header(props: Props) {
  const emptyState = useRecoilValue(sharedAtoms.configureButton);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <header css={container}>
        <div>
          <img src={require("../../assets/logo192.png")} alt="logo" />
        </div>
        <ul css={navigation}>
          <>
            {emptyState ? (
              <button
                onClick={() => {
                  props.isLoggedIn && navigate("/car-select");
                }}
                css={configureButton}
              >
                Configure a car
              </button>
            ) : (
              <></>
            )}
          </>

          <button
            css={hamburger}
            onClick={() => {
              setIsMainMenu(!isMainMenu);
            }}
          >
            <img src={require("../../assets/hamburger.png")} alt="logo" />
          </button>
        </ul>
      </header>
      {isMainMenu ? (
        <ul css={mainMenu}>
          <button
            onClick={() => {
              setIsMainMenu(!isMainMenu);
              props.isLoggedIn && navigate("/", { replace: true });
            }}
          >
            My saved configurations
          </button>
          <button
            onClick={() => {
              setIsMainMenu(!isMainMenu);
              props.onLogin();
              !props.isLoggedIn && navigate("/", { replace: true });
            }}
          >
            {props.isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

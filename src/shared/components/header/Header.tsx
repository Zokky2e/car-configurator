/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { sharedAtoms } from "../../states";
import {
  container,
  hamburger,
  navigation,
  configureButton,
  mainMenu,
} from "./Header.styles";

export function Header() {
  const emptyState = useRecoilValue(sharedAtoms.configureButton);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const isLoggedIn = useRecoilValue(sharedAtoms.isLoggedIn);
  const resetIsLoggedIn = useResetRecoilState(sharedAtoms.isLoggedIn);
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
                  isLoggedIn && navigate("/car-select");
                }}
                css={configureButton}
              >
                Configure a car
              </button>
            ) : (
              <></>
            )}
          </>
          {isLoggedIn ? (
            <button
              css={hamburger}
              onClick={() => {
                setIsMainMenu(!isMainMenu);
              }}
            >
              <img src={require("../../assets/hamburger.png")} alt="logo" />
            </button>
          ) : (
            ""
          )}
        </ul>
      </header>
      {isMainMenu ? (
        <ul css={mainMenu}>
          <button
            onClick={() => {
              setIsMainMenu(!isMainMenu);
              isLoggedIn && navigate("/", { replace: true });
            }}
          >
            My saved configurations
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsMainMenu(!isMainMenu);
                resetIsLoggedIn();
                !isLoggedIn && navigate("/", { replace: true });
              }}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

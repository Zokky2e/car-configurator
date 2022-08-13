/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { useAuth } from "../../hooks";
import { sharedAtoms } from "../../states";
import { styles } from "./Header.styles";

export function Header() {
  const emptyState = useRecoilValue(sharedAtoms.configureButton);
  const mainMenuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [isMainMenu, setIsMainMenu] = useState<boolean>(false);
  const isLoggedIn = useRecoilValue(sharedAtoms.isLoggedIn);
  const resetIsLoggedIn = useResetRecoilState(sharedAtoms.isLoggedIn);
  const resetUser = useResetRecoilState(sharedAtoms.user);
  const navigate = useNavigate();
  const user = useAuth();
  useEffect(() => {
    function exitHandler(event: any) {
      if (
        mainMenuRef.current &&
        !mainMenuRef.current.contains(event.target) &&
        !hamburgerRef.current?.contains(event.target)
      ) {
        setIsMainMenu(false);
      }
    }
    document.addEventListener("pointerdown", exitHandler);
    return () => {
      document.removeEventListener("pointerdown", exitHandler);
    };
  });
  function handleGoToHome() {
    setIsMainMenu(false);
    isLoggedIn && navigate("/", { replace: true });
  }
  function handleLogout() {
    setIsMainMenu(false);
    resetIsLoggedIn();
    resetUser();
    user.handleLogout();
  }
  return (
    <>
      <header css={styles.container}>
        <div
          onClick={() => {
            handleGoToHome();
          }}
        >
          <img src={require("../../assets/logo192.png")} alt="logo" />
        </div>
        <ul css={styles.navigation}>
          <>
            {emptyState ? (
              <button
                onClick={() => {
                  isLoggedIn && navigate("/car-select");
                }}
                css={styles.configureButton}
              >
                Configure a car
              </button>
            ) : (
              <></>
            )}
          </>
          {isLoggedIn ? (
            <button
              ref={hamburgerRef}
              css={[
                isMainMenu
                  ? [styles.hamburger, styles.activeMenu]
                  : styles.hamburger,
              ]}
              onClick={() => {
                setIsMainMenu(!isMainMenu);
              }}
            >
              <span></span>
              <span></span>
            </button>
          ) : (
            ""
          )}
          <ul
            ref={mainMenuRef}
            css={[styles.mainMenu, isMainMenu ? styles.visible : styles.hidden]}
          >
            <button
              onClick={() => {
                handleGoToHome();
              }}
            >
              My saved configurations
            </button>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            ) : (
              ""
            )}
          </ul>
        </ul>
      </header>
    </>
  );
}

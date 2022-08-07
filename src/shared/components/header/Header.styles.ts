import { css } from "@emotion/react";

export const container = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap row;
  height: 80px;
  background-color: var(--nav-bg);
  color: var(--nav-text);
  padding: 0 40px;
  button {
    cursor: pointer;
  }
`;
export const navigation = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 0;
  flex-flow: wrap row;
  list-style-type: none;
`;
export const hamburger = css`
  span {
    display: block;
    border-radius: 9999px;
    background-color: var(--nav-text);
    height: 2px;
    width: 32px;
    transition: all 0.2s ease-in-out;
  }
  span:not(:last-of-type) {
    margin-bottom: 4px;
    width: 40px;
  }
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
`;
export const activeMenu = css`
  transition-delay: 0.2s;

  span:first-of-type,
  span:last-of-type {
    transition-delay: 0.2s;
    transform: rotate(45deg);
  }
  span:first-of-type {
    transform: translateY(2px) rotate(45deg);
    width: 32px;
  }
  span:last-of-type {
    transform: translateX(0px) translateY(-4px) rotate(-45deg);
  }
`;
export const configureButton = css`
  color: var(--nav-text);
  width: 120px;
  padding: 0;
  height: 32px;
  border: 1px solid var(--nav-button-border);
  background-color: transparent;
`;

export const mainMenu = css`
  position: absolute;
  z-index: 5;
  padding: 0;
  margin: 0;
  max-width: 212px;
  margin-left: auto;
  list-style-type: none;
  display: flex;
  flex-flow: nowrap column;
  top: 80px;
  right: 0px;
  button {
    cursor: pointer;
    box-shadow: 0px 10px 40px var(--modal-shadow);
    background-color: var(--basic-white);
    color: var(--primary-1);
    border: none;
    font-size: 14px;
    padding: 16px 24px;
    text-align: left;
  }
  button:first-of-type {
    border-bottom: 1px solid var(--background);
  }
`;
export const hidden = css`
  transition-delay: 0.2s;
  visibility: hidden;
`;
export const visible = css`
  transition-delay: 0.2s;
  visibility: visible;
`;
export const styles = {
  container,
  navigation,
  hamburger,
  visible,
  hidden,
  mainMenu,
  configureButton,
  activeMenu,
};

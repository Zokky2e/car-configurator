import { css } from "@emotion/react";

export const container = css`
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
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
  position: relative;
  padding: 0;
  margin: 0;
  float: right;
  list-style-type: none;
  display: flex;
  flex-flow: nowrap column;
  justify-content: flex-start;
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

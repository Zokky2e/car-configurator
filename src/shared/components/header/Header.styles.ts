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
export const mainMenu = css`
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

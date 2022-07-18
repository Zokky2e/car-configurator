import { css } from "@emotion/react";
export const item = css`
  display: flex;
  background-color: var(--background-7);
  padding: 30px 0;
  margin: 28px 0;
`;

export const info = css`
  display: flex;
  flex: 1 0;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-flow: wrap row;
  }
  article {
    margin: 0 28px;
  }
`;
export const picture = css`
  padding: 0 40px;
  width: 420px;
  border-right: 1px solid #dbdbdb;
  @media screen and (max-width: 768px) {
    border-right: none;
  }
`;
export const year = css`
  font-family: Sans;
  font-style: normal;
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
export const title = css`
  font-family: Sans;
  font-style: normal;
  margin: 0;
  font-weight: 400;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: -2px;
  color: var(--primary);
`;
export const color = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-2);
  letter-spacing: 2px;
  margin: 8px 0 32px;
`;
export const dateCreated = css`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--text-4);
`;

export const uppercase = css`
  text-transform: uppercase;
`;

export const options = css``;

export const optionsButton = css`
  align-self: flex-end;
  float: right;
  width: 32px;
  height: 32px;
  text-align: center;
  margin-right: 16px;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
  background-color: transparent;
  border: none;
  transform: rotate(90deg);
  position: relative;
`;
export const optionsMenu = css`
  position: relative;
  z-index: 5;
  padding: 0;
  margin: 0;
  left: 28px;
  top: 36px;
  list-style-type: none;
  display: flex;
  flex-flow: nowrap column;
  justify-content: flex-end;
  button {
    text-align: left;
    width: 212px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 16px 24px;
    background-color: transparent;
    border: none;
    color: var(--primary);
    :last-of-type {
      color: var(--error);
      border-top: 1px solid var(--background);
    }
  }
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);
`;
export const styles = {
  item,
  info,
  picture,
  year,
  title,
  color,
  dateCreated,
  uppercase,
  options,
  optionsButton,
  optionsMenu,
};

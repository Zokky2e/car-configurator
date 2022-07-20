import { css } from "@emotion/react";
export const item = css`
  display: flex;
  background-color: var(--background-7);
  padding: 20px 0 24px;
  margin: 28px 0;
  @media screen and (max-width: 940px) {
    flex-flow: wrap column;
    height: 525px;
  }
`;

export const info = css`
  display: flex;
  flex: 1 0;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 940px) {
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
  @media screen and (max-width: 940px) {
    border-right: none;
    width: 100%;
    padding: 0;
  }
`;
export const year = css`
  font-family: "Inter";
  font-style: normal;
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
`;
export const title = css`
  font-family: "Optician Sans";
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

export const options = css`
  display: flex;
  flex-flow: wrap column;
  @media screen and (max-width: 940px) {
    flex-direction: row-reverse;
  }
  justify-content: flex-end;
  float: right;
`;

export const optionsButton = css`
  align-self: flex-end;
  float: right;
  width: 32px;
  height: 32px;
  text-align: center;
  margin-right: 16px;
  @media screen and (max-width: 940px) {
    align-self: flex-start;
    margin: 0 auto;
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
  left: -20px;
  top: 4px;
  list-style-type: none;
  display: flex;
  flex-flow: nowrap column;
  justify-content: flex-end;
  @media screen and (max-width: 940px) {
    flex-flow: nowrap row;
    left: 0px;
    top: 0px;
  }
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
    @media screen and (max-width: 940px) {
      width: 142px;
      padding: 16px 6px;
    }
    :last-of-type {
      color: var(--error);
      border-top: 1px solid var(--background);
      @media screen and (max-width: 940px) {
        border-top: none;
        border-left: 1px solid var(--background);
      }
    }
  }
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);
`;

export const hidden = css`
  visibility: hidden;
`;
export const visible = css`
  visibility: visible;
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
  hidden,
  visible,
};

import { css } from "@emotion/react";

const container = css`
  padding: 0 40px;
  background-color: var(--background-7);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const backButton = css`
  border: none;
  background-color: transparent;
  height: 16px;
  align-self: center;
  width: 16px;
`;
const content = css`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;
const subText = css`
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: var(--text-4);
  letter-spacing: -2px;
`;
const mainText = css`
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2px;
`;
const buttons = css`
  display: flex;
  gap: 20px;
  button {
    border: none;
    background-color: transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: var(--primary);
    :last-of-type {
      color: var(--error);
    }
  }
`;
export const styles = {
  container,
  backButton,
  content,
  subText,
  mainText,
  buttons,
};

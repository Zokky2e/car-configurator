import { css } from "@emotion/react";
const container = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-6);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const content = css`
  padding: 40px;
  background-color: var(--background-7);
  opacity: 100%;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  display: flex;
  flex-flow: column wrap;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  @media screen {
  }
  input {
    padding-bottom: 4px;
    max-width: 328px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--border-5);
    :focus {
      outline: none;
    }
  }
`;
const hidden = css`
  visibility: hidden;
`;
const visible = css`
  visibility: visible;
`;
const text = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;
const buttonPrimary = css`
  background-color: var(--primary);
  padding: 12px 20px;
  color: var(--text-7);
  border: none;
`;
const buttonSecondary = css`
  background-color: transparent;
  padding: 12px 20px;
  border: none;
`;

export const styles = {
  container,
  content,
  hidden,
  visible,
  buttonPrimary,
  buttonSecondary,
  text,
};

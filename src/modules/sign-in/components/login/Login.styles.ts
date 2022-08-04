import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const title = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 80px auto 0;
  font-style: normal;
  color: var(--text-1);
  max-width: 420px;
  margin-bottom: 16px;
`;

export const form = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const formElement = css`
  display: grid;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
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
  :last-of-type {
    margin-bottom: 16px;
  }
`;
export const buttons = css`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto 16px;
  gap: 4px;
  button {
    height: 44px;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`;
export const clickable = css`
  cursor: pointer;
  background-color: var(--primary);
  color: var(--icon-6);
`;
export const notClickable = css`
  cursor: not-allowed;
  background-color: var(--primary);
  opacity: 0.5;
  color: var(--icon-6);
`;
export const eye = css`
  position: relative;
  top: -28px;
  left: 156px;
  display: flex;
  justify-content: flex-end;
  width: 16px;
  cursor: pointer;
`;
export const recovery = css`
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  color: var(--primary);
`;
export const hidden = css`
  visibility: hidden;
`;
export const visible = css`
  visibility: visible;
`;
export const styles = {
  container,
  title,
  form,
  formElement,
  buttons,
  clickable,
  notClickable,
  eye,
  recovery,
  hidden,
  visible,
};

import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const title = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  font-style: normal;
  color: var(--text-3);
  max-width: 420px;
`;

export const form = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;
export const formElement = css`
  display: grid;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  input {
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
export const button = css`
  margin: 0 auto;
  input {
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

export const styles = {
  container,
  title,
  form,
  formElement,
  button,
  clickable,
  notClickable,
};

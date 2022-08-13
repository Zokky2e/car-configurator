import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const title = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 80px auto 0;
  font-style: normal;
  color: var(--text-1);
  max-width: 420px;
  margin-bottom: 16px;
`;

const form = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const formElement = css`
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
    ::placeholder {
      color: var(--text-5);
    }
  }

  :last-of-type {
    margin-bottom: 16px;
  }
`;
const buttons = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  button {
    height: 44px;
    width: 100%;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`;
const clickable = css`
  cursor: pointer;
  background-color: var(--primary);
  color: var(--icon-6);
`;
const notClickable = css`
  cursor: not-allowed;
  background-color: var(--primary);
  opacity: 0.5;
  color: var(--icon-6);
`;
const google = css`
  display: flex;
  padding: 0 !important;
  padding-right: 16px !important;
  justify-content: space-between;
  gap: 16px;
  img {
    width: 44px;
  }
`;
const eye = css`
  position: relative;
  top: -28px;
  left: 156px;
  display: flex;
  justify-content: flex-end;
  width: 16px;
  cursor: pointer;
`;
const hidden = css`
  visibility: hidden;
`;
const visible = css`
  visibility: visible;
`;
export const styles = {
  container,
  title,
  form,
  hidden,
  visible,
  formElement,
  buttons,
  clickable,
  notClickable,
  google,
  eye,
};

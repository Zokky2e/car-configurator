import { css } from "@emotion/react";

const container = css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
`;

const text = css`
  display: flex;
  flex-flow: nowrap column;
  p {
    text-align: left;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  p:last-of-type {
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
const image = css`
  display: flex;
`;
const successIcon = css`
  position: absolute;
  left: 36px;
  top: 24px;
  width: 16px;
  height: 16px;
  border-radius: 24px;
  padding: 4px;
  color: var(--icon-7);
  background-color: var(--success);
`;
const noBorderRadius = css`
  height: 60px;
  border-radius: 0;
`;
const borderRadius = css`
  height: 60px;
  border-radius: 60px;
`;
export const styles = {
  container,
  text,
  image,
  successIcon,
  borderRadius,
  noBorderRadius,
};

import { css } from "@emotion/react";

const container = css`
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
const noBorderRadius = css`
  height: 60px;
  border-radius: 0;
`;
const borderRadius = css`
  height: 60px;
  border-radius: 60px;
`;
export const styles = { container, text, borderRadius, noBorderRadius };

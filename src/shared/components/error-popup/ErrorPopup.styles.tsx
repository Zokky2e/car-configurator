import { css } from "@emotion/react";

const container = css`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: var(--error-1);
  margin: 8px;
  gap: 24px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  p:first-of-type {
    font-weight: 700;
  }
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;
const button = css`
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
`;

export const styles = { container, button };

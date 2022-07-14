import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    font-style: normal;
    color: var(--text-1);
  }
  button {
    max-width: 146px;
    height: 44px;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    color: var(--icon-6);
    border: none;
    cursor: pointer;
  }
`;

export const styles = { container };

import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 16px;
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    font-style: normal;
    color: var(--text-2);
    max-width: 420px;
    span {
      text-decoration: none;
      font-weight: 700;
      color: var(--primary);
      cursor: pointer;
    }
  }
`;
export const styles = { container };

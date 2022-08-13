import { css } from "@emotion/react";

const container = css`
  max-width: 1128px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
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
const hidden = css`
  visibility: hidden;
`;
const visible = css`
  visibility: visible;
`;

export const styles = { container, hidden, visible };

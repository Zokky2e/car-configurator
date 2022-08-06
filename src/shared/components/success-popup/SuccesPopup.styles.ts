import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  max-width: 1128px;
  background-color: var(--success-1);
  margin: 8px auto;

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
const content = css`
  display: flex;
  gap: 24px;
`;
const button = css`
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
`;

export const styles = { container, button, content };

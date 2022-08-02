import { css } from "@emotion/react";

const container = css`
  display: grid;
  grid-template-columns: 50% 50%;
  max-height: 80px;
  background-color: var(--background-7);
  border-top: 1px solid var(--text-5);
`;
const button = css`
  height: 100%;
  max-width: 356px;
  background-color: var(--primary);
  color: var(--text-7);
  padding: 28px 96px;
`;
const description = css`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  p {
    font-family: "Optician Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -2px;
    color: var(--text-1);
  }
  p:first-of-type {
    color: var(--text-3);
  }
`;
const price = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  p:first-of-type {
    color: var(--text-4);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const styles = { container, button, description, price };

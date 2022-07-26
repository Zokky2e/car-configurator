import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 664px;
  align-items: center;
  p:first-letter {
    text-transform: uppercase;
  }
  div:first-of-type {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const image = css`
  width: 60px;
  height: 60px;

  border-radius: 60px;
`;
const priceText = css`
  color: var(--text-3);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;
export const styles = { container, image, priceText };

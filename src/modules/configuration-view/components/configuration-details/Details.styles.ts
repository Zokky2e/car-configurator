import { css } from "@emotion/react";

const container = css`
  display: flex;
  max-width: 1128px;
  margin: 60px auto 80px;
  color: var(--text-1);
  justify-content: space-between;
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }
`;
const priceText = css`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 700;
  }
`;
const subText = css`
  color: var(--text-2);
`;
const section = css`
  border-bottom: 1px solid var(--border-5);
`;
export const styles = { container, priceText, subText, section };

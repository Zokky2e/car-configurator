import { css } from "@emotion/react";

const container = css`
  max-width: 1128px;
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
  div:last-of-type {
    align-items: center;
    text-align: right;
  }
  border-bottom: 1px solid var(--border-4);
`;
const subText = css`
  margin: 0 auto 36px;
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: var(--text-4);
  letter-spacing: -2px;
`;
const mainText = css`
  margin: 0;
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 44px;
  letter-spacing: -2px;
`;
const smallText = css`
  margin: 24px auto 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const mediumText = css`
  margin: 0 auto 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const styles = { container, subText, mainText, smallText, mediumText };

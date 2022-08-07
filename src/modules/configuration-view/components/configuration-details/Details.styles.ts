import { css } from "@emotion/react";

const container = css`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
  max-width: 1128px;
  width: 100%;
  margin: 60px auto 0px;
  color: var(--text-1);
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
  padding-top: 40px;
  p {
    font-weight: 700;
  }
`;
const subText = css`
  color: var(--text-2);
`;
const section = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-5);
  :not(p:first-of-type) {
    padding-top: 40px;
  }
`;
const smallText = css`
  background-color: transparent;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--primary);
`;
export const styles = { container, priceText, subText, section, smallText };

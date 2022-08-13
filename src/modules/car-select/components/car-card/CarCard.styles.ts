import { css } from "@emotion/react";

const card = css`
  min-width: 468px;
  list-style-type: none;
  background-color: var(--background-7);
  padding: 0 40px 40px;
  display: flex;
  flex-flow: nowrap column;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    flex-flow: nowrap column;
    min-height: 600px;
    max-width: 468px;
  }
  @media screen and (max-width: 550px) {
    margin: 0 auto;
  }
  p {
    margin: 0;
    text-transform: uppercase;
  }
`;
const image = css`
  width: 1204px;
  height: 388px;
  position: relative;
  left: -560px;
  top: -28px;
`;
const year = css`
  font-family: "Optician Sans";
  font-style: normal;

  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2px;
  color: var(--text-3);
  margin: 40px 0 0;
`;
const name = css`
  font-family: "Optician Sans";
  font-style: normal;
  font-size: 48px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -2px;
  color: var(--text-1);
  margin-bottom: 16px !important;
`;
const button = css`
  width: 180px;
  height: 44px;
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--icon-6);
  border: none;
  cursor: pointer;
`;

export const styles = { card, year, name, image, button };

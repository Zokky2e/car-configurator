import { css } from "@emotion/react";

export const card = css`
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
export const image = css`
  width: 1204px;
  height: 388px;
  position: relative;
  left: -560px;
  top: -28px;
`;
export const year = css`
  font-family: Sans;
  font-style: normal;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -2px;
  color: var(--text-3);
  margin: 40px 0 8px !important;
`;
export const name = css`
  font-family: Sans;
  font-style: normal;
  font-size: 44px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -2px;
  color: var(--text-1);
  margin-bottom: 16px !important;
`;
export const button = css`
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

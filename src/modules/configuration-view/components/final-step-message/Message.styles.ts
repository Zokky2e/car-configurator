import { css } from "@emotion/react";
const container = css`
  display: flex;
  flex-flow: nowrap column;
  margin: 40px auto 0;
  p {
    margin: 8px 0;
  }
  align-items: center;
`;
const mainText = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;
const subText = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;
export const styles = { container, mainText, subText };

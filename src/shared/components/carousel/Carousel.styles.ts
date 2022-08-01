import { css } from "@emotion/react";
const container = css`
  margin: 40px auto;

  display: flex;
  flex-flow: nowrap column;

  align-items: center;
`;
const image = css`
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const slider = css`
  display: flex;
`;

export const styles = { container, image, slider };

import { css } from "@emotion/react";
const container = css`
  margin: 40px auto;

  max-width: 1128px;
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
`;
const image = css`
  list-style-type: none;
  display: flex;
  width: 100%;
  overflow: hidden;

  position: relative;
`;
const slider = css`
  display: flex;
`;
const slide = css`
  width: 100%;
  opacity: 0;
  img {
    height: 340px;
    object-fit: cover;
  }
`;
const active = css`
  order: -1;
  opacity: 1;
`;
export const styles = { container, image, slider, slide, active };

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

const slide = css`
  opacity: 0;

  img {
    width: 0;
    max-height: 340px;
    height: auto;
  }
`;
const active = css`
  order: -1;
  opacity: 1;
  img {
    max-height: 340px;

    width: 100%;
    object-fit: cover;
  }
`;
export const styles = { container, image, slider, slide, active };

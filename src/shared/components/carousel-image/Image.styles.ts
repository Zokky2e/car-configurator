import { css } from "@emotion/react";
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
    max-width: 1012px;
    width: 100%;
    padding: 0 40px 0 40px;
    object-fit: cover;
    @media screen and (max-width: 940px) {
      padding: 0;
    }
  }
`;
const loading = css`
  opacity: 0.1;
`;
export const styles = { slide, loading, active };

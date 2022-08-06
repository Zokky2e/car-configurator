import { css } from "@emotion/react";

export const carList = css`
  max-width: 1128px;
  max-height: 628px;
  overflow-y: scroll;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const styles = { carList };

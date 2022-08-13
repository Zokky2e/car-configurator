import { css } from "@emotion/react";

export const wrapper = css`
  margin: 80px auto 0;
  width: fit-content;
  padding: 0 0 16px;
  border-radius: 4px;
  background-color: var(--background-6);
  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 100%;
  }
`;

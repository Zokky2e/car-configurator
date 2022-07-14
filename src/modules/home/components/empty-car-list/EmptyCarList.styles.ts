import { css } from "@emotion/react";

export const carList = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap column;
  height: 600px;
  img {
    opacity: 0.1;
    max-width: 640px;
  }
  @media screen and (max-width: 644px) {
    img {
      max-width: 100%;
    }
  }
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    font-style: normal;
    color: var(--text-3);
    max-width: 420px;
    a {
      text-decoration: none;
      font-weight: 700;
      color: var(--primary);
    }
  }
`;

export const styles = { carList };

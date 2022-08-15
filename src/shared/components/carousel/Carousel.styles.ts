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
  margin: 40px 0 0;
  display: flex;
  color: var(--text-5);
  button {
    padding: 0 16px;
    box-sizing: border-box;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;
const numbers = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  :first-letter {
    color: var(--text-1);
  }
`;
export const styles = { container, image, slider, numbers };

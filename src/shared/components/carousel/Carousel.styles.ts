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
  color: var(--text-5);
  gap: 10px;
  button {
    border: none;
    cursor: pointer;
  }
`;
const firstLetter = css`
  :first-letter {
    color: var(--text-1);
  }
`;
export const styles = { container, image, slider, firstLetter };

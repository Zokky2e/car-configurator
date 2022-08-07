import { css } from "@emotion/react";
const tooltip = css`
  position: relative;
  top: 2px;
  margin: 0 !important;
  [title]:before {
    position: absolute;
    opacity: 0;
  }
  [title]:hover:before {
    opacity: 1;
  }
`;
const message = css`
  position: absolute;
  background-color: var(--background-7);
  color: var(--text-1);
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  max-width: 200px;
  padding: 12px;
  z-index: 2;
  top: -88px;
  left: -52px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;
export const styles = { tooltip, message };

import { css } from "@emotion/react";

const container = css`
  position: relative;
  width: 356px;
  min-height: 80vh;
  background-color: var(--background-7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;
const hidden = css`
  display: none;
`;
const button = css`
  height: 68px;
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--text-7);
  border: none;
  cursor: pointer;
`;
const items = css`
  display: flex;
  flex-flow: nowrap column;
  gap: 20px;
  padding: 40px;
`;
const price = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px 40px;
  p {
    margin: 0;
  }
`;
const menuFooter = css`
  display: flex;
  flex-flow: nowrap column;
`;
const text = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-4);
`;
const number = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: var(--text-1);
`;
export const styles = {
  container,
  hidden,
  button,
  items,
  price,
  menuFooter,
  text,
  number,
};

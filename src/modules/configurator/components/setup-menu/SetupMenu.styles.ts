import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 940px) {
    flex-flow: nowrap column;
    justify-content: flex-start;
    align-items: center;
  }
  width: 100%;
`;
const slider = css`
  display: flex;
  align-items: center;
`;
const menu = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-flow: nowrap column;
  background-color: var(--background-7);
  border-left: 1px solid var(--border-5);
  width: 356px;
  min-height: 80vh;
  right: 0px;
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
const menuButton = css`
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
const text = css`
  display: flex;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  color: var(--text-4);
  span {
    position: relative;
    top: 2px;
  }
`;
const number = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: var(--text-1);
`;
const uppercase = css`
  text-transform: uppercase;
`;
export const styles = {
  container,
  items,
  slider,
  menu,
  menuFooter,
  price,
  menuButton,
  text,
  number,
  uppercase,
};

import { css } from "@emotion/react";

export const carList = css`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  width: 100%;
  height: 600px;
  padding: 60px 0 0;
  margin: 0;
  gap: 32px;
  @media screen and (max-width: 1000px) {
    flex-flow: nowrap column;
    align-items: center;
  }
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-right: 0px !important;
`;
export const title = css`
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  margin: 80px auto 0;
  color: var(--text-1);
`;
export const description = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 16px 0 0;
  color: var(--text-3);
`;
export const styles = { title, description, carList };

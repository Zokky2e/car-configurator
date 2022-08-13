import { css } from "@emotion/react";

const carList = css`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  margin: 0 0 0 auto;
  width: 100%;
  max-width: 1256px;
  height: 600px;
  padding: 60px 0;

  padding-right: 32px;
  gap: 32px;
  @media screen and (max-width: 1000px) {
    padding: 60px 0 0;
    flex-flow: nowrap column;
    align-items: center;
  }
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const title = css`
  max-width: 1128px;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  margin: 80px auto 0;
  padding: 0 16px;
  color: var(--text-1);
`;
const description = css`
  max-width: 1128px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 16px auto 0;
  padding: 0 16px;
  color: var(--text-3);
`;
export const styles = { title, description, carList };

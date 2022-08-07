import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-flow: column nowrap;
    align-items: center;
    max-height: none;
  }
  padding-left: 40px;
  margin-top: 80px;
  max-height: 80px;
  background-color: var(--background-7);
  border-top: 1px solid var(--text-5);
`;
const button = css`
  position: relative;
  height: 100%;
  max-height: 80px;
  max-width: 356px;
  background-color: var(--primary);
  color: var(--text-7);
  padding: 28px 96px;
  border: none;
`;
const description = css`
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  gap: 12px;

  p {
    font-family: "Optician Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -2px;
    color: var(--text-1);
  }
  p:first-of-type {
    color: var(--text-3);
  }
`;
const price = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  @media screen and (max-width: 800px) {
    flex-flow: column nowrap;
    align-items: center;
    max-height: none;
  }
  p {
    margin: 0;
    color: var(--text-1) !important;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
`;
const text = css`
  position: relative;
  top: 4px;
  display: flex;
  gap: 4px;
  p:first-of-type {
    margin: 0;
    color: var(--text-4) !important;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;
const uppercase = css`
  text-transform: uppercase;
`;
export const styles = {
  container,
  button,
  description,
  price,
  uppercase,
  text,
};

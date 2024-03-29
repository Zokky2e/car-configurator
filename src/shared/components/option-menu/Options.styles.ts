import { css } from "@emotion/react";

const container = css`
  padding: 0 40px;
  background-color: var(--background-7);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-5);
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;
const backButton = css`
  border: none;
  background-color: transparent;
  height: 16px;
  align-self: center;
  width: 16px;
  cursor: pointer;
`;
const content = css`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  @media screen and (max-width: 600px) {
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 320px) {
    p {
      font-size: 12px;
    }
  }
`;
const subText = css`
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: var(--text-4);
  letter-spacing: -2px;
`;
const mainText = css`
  font-family: "Optician Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -2px;
`;
const buttons = css`
  display: flex;
  gap: 20px;
  button {
    border: none;
    background-color: transparent;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: var(--primary);
    :last-of-type {
      color: var(--error);
    }
  }
`;
const steps = css`
  display: flex;
  gap: 40px;
  span {
    margin-right: 4px;
    color: var(--text-4);
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-1);
  }
  @media screen and (max-width: 550px) {
    flex-flow: nowrap column;
    gap: 5px;
    align-items: flex-start;
    p {
      margin: 0;
    }
  }
`;
const currentStep = css`
  font-weight: 700 !important;
`;
const hidden = css`
  visibility: hidden;
`;
const visible = css`
  visibility: visible;
`;
export const styles = {
  container,
  backButton,
  content,
  subText,
  mainText,
  buttons,
  steps,
  currentStep,
  hidden,
  visible,
};

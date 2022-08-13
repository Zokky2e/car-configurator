import { css } from "@emotion/react";
const container = css`
  display: flex;
  flex-flow: wrap column;
  @media screen and (max-width: 940px) {
    flex-direction: row-reverse;
    align-self: flex-end;
    gap: 8px;
    button {
      text-align: center;
    }
  }
  justify-content: flex-end;
  float: right;
`;

const button = css`
  align-self: flex-end;
  float: right;
  width: 32px;
  height: 32px;
  text-align: center;
  margin-right: 16px;
  @media screen and (max-width: 940px) {
    align-self: flex-start;
    margin: 0 auto;
  }
  background-color: transparent;
  border: none;
  position: relative;
  span {
    display: block;
    margin: 2px;
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    background-color: var(--primary-3);
    transition: all 0.2s ease-in-out;
  }
`;
const active = css`
  transition-delay: 0.2s;

  span:first-of-type,
  span:last-of-type {
    transition-delay: 0.2s;
    transform: rotate(45deg);
    width: 16px;
    height: 2px;
  }

  span:first-of-type {
    transition-delay: 0.2s;
    transform: translateX(-7px) translateY(4px) rotate(45deg);
  }
  span:last-of-type {
    transition-delay: 0.2s;
    transform: translateX(-7px) translateY(-6px) rotate(-45deg);
  }
  span:nth-of-type(2) {
    transition-delay: 0.2s;
    width: 0;
  }
`;

const menu = css`
  position: relative;
  z-index: 5;
  padding: 0;
  margin: 0;
  left: -20px;
  top: 4px;
  list-style-type: none;
  display: flex;
  flex-flow: nowrap column;
  justify-content: flex-end;
  @media screen and (max-width: 940px) {
    flex-flow: nowrap row;
    left: 0px;
    top: 0px;
  }
  button {
    text-align: left;
    width: 212px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 16px 24px;
    background-color: transparent;
    border: none;
    color: var(--primary);
    @media screen and (max-width: 940px) {
      width: 142px;
      padding: 16px 6px;
    }
    :last-of-type {
      color: var(--error);
      border-top: 1px solid var(--background);
      @media screen and (max-width: 940px) {
        border-top: none;
        border-left: 1px solid var(--background);
      }
    }
  }
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);
`;
const hidden = css`
  transition-delay: 0.2s;
  visibility: hidden;
`;
const visible = css`
  transition-delay: 0.2s;
  visibility: visible;
`;
export const styles = { container, button, menu, active, hidden, visible };

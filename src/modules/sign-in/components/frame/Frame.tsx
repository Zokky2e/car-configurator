/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import { wrapper } from "./Frame.styles";

export function Frame(props: PropsWithChildren) {
  return <div css={wrapper}>{props.children}</div>;
}

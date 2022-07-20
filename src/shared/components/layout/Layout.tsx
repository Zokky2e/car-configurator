/** @jsxImportSource @emotion/react */

import { Header } from "../header";
import { wrapper, body } from "./Layout.styles";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main css={wrapper}>
      <Header />
      <div css={body}>{children}</div>
    </main>
  );
};

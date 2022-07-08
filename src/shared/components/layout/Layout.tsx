/** @jsxImportSource @emotion/react */
import { Header } from "../header";
import { wrapper, body } from "./Layout.styles";
interface LayoutProps {
  children: React.ReactNode;
  onLogin: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogin }) => {
  return (
    <main css={wrapper}>
      <Header onLogin={onLogin} />
      <div css={body}>{children}</div>
    </main>
  );
};

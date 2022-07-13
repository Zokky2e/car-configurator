/** @jsxImportSource @emotion/react */
import { Header } from "../header";
import { wrapper, body } from "./Layout.styles";
interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isLoggedIn,
  onLogin,
}) => {
  return (
    <main css={wrapper}>
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
      <div css={body}>{children}</div>
    </main>
  );
};

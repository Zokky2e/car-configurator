/** @jsxImportSource @emotion/react */

import { Header } from "../header";
import { styles } from "./Layout.styles";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main css={styles.wrapper}>
      <Header />
      <div css={styles.body}>{children}</div>
    </main>
  );
};

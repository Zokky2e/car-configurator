/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sharedAtoms } from "../../states";
import { Header } from "../header";
import { wrapper, body } from "./Layout.styles";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoggedIn = useRecoilValue(sharedAtoms.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    isLoggedIn
      ? navigate("/", { replace: true })
      : navigate("/sign-in", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <main css={wrapper}>
      <Header />
      <div css={body}>{children}</div>
    </main>
  );
};

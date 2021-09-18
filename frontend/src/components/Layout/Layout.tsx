import React, { ReactNode } from "react";
import { Header, MenuPanel } from "components";
import "./Layout.scss";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <MenuPanel />
      <Header />
      <div className="Layout-Container">{children}</div>
    </div>
  );
};

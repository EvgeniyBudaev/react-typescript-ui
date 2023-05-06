import { useRef, useState } from "react";
import type { FC } from "react";
import { Avatar, ETypographyVariant, Hamburger, Sidebar, Typography } from "uikit";
import "./SidebarPage.scss";

export const SidebarPage: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef(null);

  const handleSidebarOpen = () => {
    setIsActive(true);
  };

  const handleSidebarClose = () => {
    setIsActive(false);
  };

  return (
    <section className="SidebarPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Sidebar</Typography>
      <Hamburger color="black" isActive={isActive} onClick={handleSidebarOpen} />
      <Sidebar
        className="SidebarPageSidebar"
        isActive={isActive}
        onClose={handleSidebarClose}
        ref={sidebarRef}
      >
        <Avatar title="IT" />
      </Sidebar>
    </section>
  );
};

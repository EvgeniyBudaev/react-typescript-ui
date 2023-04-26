import { useRef, useState } from "react";
import type { FC } from "react";
import { Avatar, Hamburger, Sidebar } from "uikit";
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
      <h2>Sidebar</h2>
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

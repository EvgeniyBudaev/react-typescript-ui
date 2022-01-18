import React, { useState } from "react";
import { Avatar, Hamburger, Sidebar } from "ui-kit";
import "./SidebarPage.scss";

export const SidebarPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSidebarOpen = () => {
    setIsActive(true);
  };

  const handleSidebarClose = () => {
    setIsActive(false);
  };

  return (
    <section className="SidebarPage">
      <h2>Sidebar</h2>
      <Hamburger
        color="black"
        isActive={isActive}
        onClick={handleSidebarOpen}
      />
      <Sidebar
        className="SidebarPageSidebar"
        isActive={isActive}
        onClose={handleSidebarClose}
      >
        <Avatar title="IT" />
      </Sidebar>
    </section>
  );
};

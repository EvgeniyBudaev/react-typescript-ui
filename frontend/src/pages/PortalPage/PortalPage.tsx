import type { FC } from "react";
import { Portal } from "uikit";
import "./PortalPage.scss";

export const PortalPage: FC = () => {
  return (
    <div className="PortalPage">
      <h2>Portal</h2>
      <Portal className="MyPortal" element="span" elementFindById="react-modals">
        <h3>This is portal container</h3>
      </Portal>
    </div>
  );
};

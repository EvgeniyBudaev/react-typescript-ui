import type { FC } from "react";
import { ETypographyVariant, Portal, Typography } from "uikit";
import "./PortalPage.scss";

export const PortalPage: FC = () => {
  return (
    <div className="PortalPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Portal</Typography>
      <Portal className="MyPortal" element="span" elementFindById="react-modals">
        <h3>This is portal container</h3>
      </Portal>
    </div>
  );
};

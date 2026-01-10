import type { FC } from "react";
import { Title } from "components/Title";
import { Portal } from "uikit";
import "./PortalPage.scss";

export const PortalPage: FC = () => {
  return (
    <section>
      <Title>Portal</Title>
      <Portal className="MyPortal" element="span" elementFindById="react-modals">
        <h3>This is portal container</h3>
      </Portal>
    </section>
  );
};

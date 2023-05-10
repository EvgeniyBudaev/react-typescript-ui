import type { FC } from "react";
import { Title } from "components";
import { Portal } from "uikit";
import "./PortalPage.scss";
import React from "react";

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

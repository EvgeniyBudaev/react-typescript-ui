import React from "react";
import type { FC } from "react";
import { Title } from "components";
import { Icon } from "uikit";

export const IconPage: FC = () => {
  return (
    <section>
      <Title>Icon</Title>
      <Icon type="Close" />
    </section>
  );
};

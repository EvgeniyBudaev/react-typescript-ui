import type { FC } from "react";
import { Icon } from "uikit";
import "./IconPage.scss";

export const IconPage: FC = () => {
  return (
    <section className="IconPage">
      <h2>Icon</h2>
      <Icon type="Close" />
    </section>
  );
};

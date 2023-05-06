import { useState } from "react";
import type { FC } from "react";
import { ETypographyVariant, Hamburger, Typography } from "uikit";
import "./HamburgerPage.scss";

export const HamburgerPage: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState?: boolean) => !prevState);
  };

  return (
    <section className="HamburgerPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Hamburger</Typography>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
    </section>
  );
};

import React, { useState } from "react";
import type { FC } from "react";
import { Title } from "components";
import { Hamburger } from "uikit";

export const HamburgerPage: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevState?: boolean) => !prevState);
  };

  return (
    <section>
      <Title>Hamburger</Title>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
    </section>
  );
};

import clsx from "clsx";
import { memo, type FC } from "react";
import { Switch } from "@headlessui/react";

import { SWITCHER_THEMES } from "../constants";
import { ESwitcherVariant } from "../enums";
import type { TSwitcherHeadlessProps } from "./types";

const SwitcherHeadlessComponent: FC<TSwitcherHeadlessProps> = ({
  children,
  className,
  dataTestId = "uikit__switcher-headless",
  isChecked,
  onChange,
  variant = ESwitcherVariant.Default,
}) => {
  const currentTheme = SWITCHER_THEMES()[variant];

  return (
    <Switch
      checked={isChecked}
      className={clsx(currentTheme, className)}
      data-testid={dataTestId}
      onChange={onChange}
    >
      <div
        className={clsx("Switcher-Pointer", {
          "Switcher-Pointer__checked": isChecked,
        })}
      />
      {children}
    </Switch>
  );
};

SwitcherHeadlessComponent.displayName = "SwitcherHeadless";

export const SwitcherHeadless = memo(SwitcherHeadlessComponent);

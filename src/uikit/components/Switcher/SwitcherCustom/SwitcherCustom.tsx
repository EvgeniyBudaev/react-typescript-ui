import clsx from "clsx";
import { memo, type FC } from "react";

import { SWITCHER_THEMES } from "../constants";
import { ESwitcherVariant } from "../enums";
import type { TSwitcherCustomProps } from "./types";

const SwitcherCustomComponent: FC<TSwitcherCustomProps> = ({
  children,
  className,
  dataTestId = "uikit__switcher-custom",
  isChecked,
  variant = ESwitcherVariant.Default,
}) => {
  const currentTheme = SWITCHER_THEMES()[variant];

  return (
    <button className={clsx(currentTheme, className)} data-testid={dataTestId}>
      <div
        className={clsx("Switcher-Pointer", {
          "Switcher-Pointer__checked": isChecked,
        })}
      />
      {children}
    </button>
  );
};

SwitcherCustomComponent.displayName = "SwitcherCustom";

export const SwitcherCustom = memo(SwitcherCustomComponent);

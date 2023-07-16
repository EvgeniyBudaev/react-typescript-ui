import { memo } from "react";
import type { FC, ReactNode } from "react";
import clsx from "clsx";
import { SWITCHER_THEMES } from "../constants";
import { ESwitcherVariant } from "../enums";

type TProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isChecked?: boolean;
  variant?: ESwitcherVariant;
};

const SwitcherCustomComponent: FC<TProps> = ({
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

export const SwitcherCustom = memo(SwitcherCustomComponent);

import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { SWITCHER_THEMES } from "../constants";
import { ESwitcherVariant } from "../enums";

type TProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  variant?: ESwitcherVariant;
};

const SwitcherHeadlessComponent: FC<TProps> = ({
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

export const SwitcherHeadless = memo(SwitcherHeadlessComponent);

import type { TPlacement } from "../Tooltip/Tooltip/types";

type TCopyToClipboardElement = {
  copyIcon?: string;
};

export type TCopyToClipboardClasses = Partial<TCopyToClipboardElement>;

type TCopyToClipboardTooltipElement = {
  message?: string;
  placement?: TPlacement;
};

export type TCopyToClipboardTooltip = Partial<TCopyToClipboardTooltipElement>;

export type TCopyToClipboardProps = {
  classes?: TCopyToClipboardClasses;
  className?: string;
  dataTestId?: string;
  timerDelay?: number;
  tooltip?: TCopyToClipboardTooltip;
  value: string;
};

import type { TPlacement } from "uikit/Tooltip";

type TCopyToClipboardElement = {
  copyIcon?: string;
};

export type TCopyToClipboardClasses = Partial<TCopyToClipboardElement>;

type TCopyToClipboardTooltipElement = {
  message?: string;
  placement?: TPlacement;
};

export type TCopyToClipboardTooltip = Partial<TCopyToClipboardTooltipElement>;

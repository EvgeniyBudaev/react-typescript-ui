import type { TPlacement } from "uikit/index";

type TGetTooltipOffsetParams = {
  placement?: TPlacement;
  referenceElement?: HTMLDivElement | null;
};

export const getTooltipOffset = ({ placement, referenceElement }: TGetTooltipOffsetParams) => {
  if (placement === "bottom" || placement === "top") {
    // return [0, referenceElement ? referenceElement.offsetHeight : 0];
    return [0, 10];
  } else {
    // return [0, referenceElement ? referenceElement.offsetWidth : 0];
    return [0, 10];
  }
};

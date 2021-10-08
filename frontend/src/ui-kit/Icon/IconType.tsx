import React from "react";
import { newGuid } from "utils/guid";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Checkbox } from "ui-kit/assets/icons/Checkbox.svg";
import { ReactComponent as Close } from "ui-kit/assets/icons/Close.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";

export type IconType = "ArrowDown" | "Checkbox" | "Close" | "Pdf";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
]);

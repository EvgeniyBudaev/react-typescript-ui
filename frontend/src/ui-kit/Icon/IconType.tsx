import React from "react";
import { newGuid } from "utils/guid";
import { ReactComponent as ArrowDown } from "ui-kit/assets/icons/ArrowDown.svg";
import { ReactComponent as Center } from "ui-kit/assets/icons/Center.svg";
import { ReactComponent as Checkbox } from "ui-kit/assets/icons/Checkbox.svg";
import { ReactComponent as Close } from "ui-kit/assets/icons/Close.svg";
import { ReactComponent as Minus } from "ui-kit/assets/icons/Minus.svg";
import { ReactComponent as Pdf } from "ui-kit/assets/icons/files/Pdf.svg";
import { ReactComponent as Plus } from "ui-kit/assets/icons/Plus.svg";
import { ReactComponent as Spinner } from "ui-kit/assets/icons/Spinner.svg";
import { ReactComponent as Telegram } from "ui-kit/assets/icons/Telegram.svg";
import { ReactComponent as Visibility } from "ui-kit/assets/icons/Visibility.svg";
import { ReactComponent as VisibilityOff } from "ui-kit/assets/icons/VisibilityOff.svg";

export type IconType =
  | "ArrowDown"
  | "Center"
  | "Checkbox"
  | "Close"
  | "Minus"
  | "Pdf"
  | "Plus"
  | "Spinner"
  | "Telegram"
  | "Visibility"
  | "VisibilityOff";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["Center", <Center key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
  ["Minus", <Minus key={newGuid()} />],
  ["Pdf", <Pdf key={newGuid()} />],
  ["Plus", <Plus key={newGuid()} />],
  ["Spinner", <Spinner key={newGuid()} />],
  ["Telegram", <Telegram key={newGuid()} />],
  ["Visibility", <Visibility key={newGuid()} />],
  ["VisibilityOff", <VisibilityOff key={newGuid()} />],
]);

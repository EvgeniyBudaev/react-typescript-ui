import clsx from "clsx";
import { ESwitcherVariant } from "./enums";
import "./Switcher.scss";

export const SWITCHER_THEMES = () => {
  return {
    [ESwitcherVariant.Default]: clsx("Switcher"),
  };
};

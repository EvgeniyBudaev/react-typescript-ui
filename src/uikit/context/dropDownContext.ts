import { createContext } from "react";
import type { RefObject } from "react";

export type TDropDownState = {
  isDropDownOpen?: boolean;
  onClickButtonDropDown?: () => void;
  refButtonDropDown?: RefObject<HTMLDivElement>;
  refPanelDropDown?: RefObject<HTMLDivElement>;
};

export const DropDownContext = createContext<TDropDownState | null>(null);
export const DropDownProvider = DropDownContext.Provider;

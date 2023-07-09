import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { DropDownContext } from "uikit";
import type { TDropDownState } from "uikit";

export const useDropDownContext = (): TDropDownState | null => {
  return useContext(DropDownContext);
};

export const useDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const refButtonDropDown = useRef<HTMLDivElement>(null);
  const refPanelDropDown = useRef<HTMLDivElement>(null);

  const handleClickButtonDropDown = () => {
    setIsDropDownOpen((prevState?: boolean) => !prevState);
  };

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (
      isDropDownOpen &&
      refButtonDropDown.current &&
      event.target instanceof HTMLElement &&
      !refButtonDropDown.current.contains(event.target)
    ) {
      if (refPanelDropDown.current && !refPanelDropDown.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutsideDropDown);
    };
  });

  return useMemo(() => {
    return {
      isDropDownOpen,
      onClickButtonDropDown: handleClickButtonDropDown,
      refButtonDropDown,
      refPanelDropDown,
    };
  }, [isDropDownOpen, handleClickButtonDropDown, refButtonDropDown, refPanelDropDown]);
};

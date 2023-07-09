import clsx from "clsx";
import type { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { DropDownProvider, TRANSITION, useDropDown, useDropDownContext } from "uikit";
import type { TDropDownClasses } from "./types";
import "./DropDown.scss";

type TProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
};

export const DropDown = ({ children, classes }: TProps): JSX.Element => {
  const dropDownState = useDropDown();

  return (
    <DropDownProvider value={dropDownState}>
      <div className={clsx("DropDown", classes?.dropDown)}>{children}</div>
    </DropDownProvider>
  );
};

type TDropDownButton = {
  children?: ReactNode;
  classes?: TDropDownClasses;
};

// eslint-disable-next-line react/display-name
DropDown.Button = ({ children, classes }: TDropDownButton): JSX.Element => {
  const dropDownState = useDropDownContext();

  return (
    <div
      className={clsx("DropDown-Button", classes?.dropDownButton)}
      onClick={dropDownState?.onClickButtonDropDown}
      ref={dropDownState?.refButtonDropDown}
    >
      {children}
    </div>
  );
};

type TDropDownPanel = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  transition?: number;
};

// eslint-disable-next-line react/display-name
DropDown.Panel = ({ children, classes, transition }: TDropDownPanel): JSX.Element => {
  const dropDownState = useDropDownContext();

  return (
    <CSSTransition
      className={clsx("DropDown-Panel", classes?.dropDownPanel)}
      in={dropDownState?.isDropDownOpen}
      nodeRef={dropDownState?.refPanelDropDown}
      timeout={transition ?? TRANSITION}
      unmountOnExit
    >
      <div ref={dropDownState?.refPanelDropDown}>{children}</div>
    </CSSTransition>
  );
};

import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { DropDownProvider, TRANSITION, useDropDown, useDropDownContext } from "uikit";
import type { TDropDownClasses } from "./types";
import "./DropDown.scss";

type TProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  dataTestId?: string;
};

export const DropDown = ({
  children,
  classes,
  dataTestId = "uikit__dropDown",
}: TProps): JSX.Element => {
  const dropDownState = useDropDown();

  return (
    <DropDownProvider value={dropDownState}>
      <div className={clsx("DropDown", classes?.dropDown)} data-testid={dataTestId}>
        {children}
      </div>
    </DropDownProvider>
  );
};

type TDropDownButton = {
  children?: ReactNode;
  classes?: TDropDownClasses;
};

const DropDownButton: FC<TDropDownButton> = ({ children, classes }) => {
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

DropDown.Button = DropDownButton;

type TDropDownPanel = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  transition?: number;
};

const DropDownPanel: FC<TDropDownPanel> = ({ children, classes, transition }) => {
  const dropDownState = useDropDownContext();

  return (
    <CSSTransition
      className={clsx("DropDown-Panel", classes?.dropDownPanel)}
      in={dropDownState?.isDropDownOpen}
      nodeRef={dropDownState?.refPanelDropDown}
      onClick={dropDownState?.onClickButtonDropDown}
      timeout={transition ?? TRANSITION}
      unmountOnExit
    >
      <div ref={dropDownState?.refPanelDropDown}>{children}</div>
    </CSSTransition>
  );
};

DropDown.Panel = DropDownPanel;

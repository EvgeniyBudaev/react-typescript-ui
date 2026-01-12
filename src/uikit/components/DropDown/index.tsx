import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import { DropDownProvider, TRANSITION, useDropDown, useDropDownContext } from "uikit";

import type { TDropDownButtonProps, TDropDownPanelProps, TDropDownProps } from "./types";
import "./DropDown.scss";

export const DropDown = ({
  children,
  classes,
  dataTestId = "uikit__dropDown",
}: TDropDownProps): JSX.Element => {
  const dropDownState = useDropDown();

  return (
    <DropDownProvider value={dropDownState}>
      <div className={clsx("DropDown", classes?.dropDown)} data-testid={dataTestId}>
        {children}
      </div>
    </DropDownProvider>
  );
};

const DropDownButton: FC<TDropDownButtonProps> = ({ children, classes }) => {
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

const DropDownPanel: FC<TDropDownPanelProps> = ({ children, classes, transition }) => {
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

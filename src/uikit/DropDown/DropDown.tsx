import { memo, useRef } from "react";
import type { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import { TRANSITION } from "uikit";
import type { TDropDownClasses } from "./types";
import "./DropDown.scss";

type TProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  className?: string;
  isOpen?: boolean;
  transition?: number;
};

const Component: FC<TProps> = ({ children, classes, className, isOpen, transition }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={transition ?? TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={clsx("DropDown", classes?.dropDown)}>{children}</div>
      </div>
    </CSSTransition>
  );
};

export const DropDown = memo(Component);

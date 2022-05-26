import { TRANSITION } from "constants/transition";
import React, { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./DropDown.scss";

export interface IDropDownProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

const DropDownComponent: React.FC<IDropDownProps> = ({
  className,
  children,
  isOpen,
}: IDropDownProps) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={classNames("DropDown")}>{children}</div>
      </div>
    </CSSTransition>
  );
};

export const DropDown = memo(DropDownComponent);

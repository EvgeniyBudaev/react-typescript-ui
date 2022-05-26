import React, { memo, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { Overlay } from "ui-kit";
import "./Sidebar.scss";

export interface ISidebarProps {
  className?: string;
  children?: ReactNode;
  transition?: number;
  isActive?: boolean;
  onClose?: (event: React.MouseEvent) => void;
}

const SidebarComponent: React.FC<ISidebarProps> = ({
  className,
  children,
  transition = 300,
  isActive = false,
  onClose,
}) => {
  const nodeRef = useRef(null);

  return (
    <>
      <Overlay timeout={transition} onClick={onClose} isActive={isActive} />
      <CSSTransition
        in={isActive}
        nodeRef={nodeRef}
        timeout={transition}
        unmountOnExit
      >
        <div className={classNames("Sidebar", className)} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </>
  );
};

export const Sidebar = memo(SidebarComponent);

import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./Overlay.scss";

export interface IOverlayProps {
  className?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Overlay: React.FC<IOverlayProps> = ({
  className,
  isActive = false,
  onClick,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={classNames("Overlay", className)}
      in={isActive}
      nodeRef={nodeRef}
      timeout={500}
      unmountOnExit
      onClick={onClick}
    >
      <div ref={nodeRef} />
    </CSSTransition>
  );
};

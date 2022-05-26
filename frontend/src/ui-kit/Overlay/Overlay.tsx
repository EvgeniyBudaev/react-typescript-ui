import React, { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./Overlay.scss";

export interface IOverlayProps {
  className?: string;
  timeout?: number;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const OverlayComponent: React.FC<IOverlayProps> = ({
  className,
  timeout = 300,
  isActive = false,
  onClick,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={classNames("Overlay", className)}
      in={isActive}
      nodeRef={nodeRef}
      timeout={timeout}
      unmountOnExit
      onClick={onClick}
    >
      <div ref={nodeRef} />
    </CSSTransition>
  );
};

export const Overlay = memo(OverlayComponent);

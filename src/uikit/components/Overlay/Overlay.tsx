import { memo, useRef } from "react";
import type { FC, MouseEvent } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import { TRANSITION } from "../../constants";
import "./Overlay.scss";

type TProps = {
  className?: string;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  timeout?: number;
};

const Component: FC<TProps> = ({ className, isActive = false, onClick, timeout = TRANSITION }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={classNames("Overlay", className)}
      in={isActive}
      nodeRef={nodeRef}
      onClick={onClick}
      timeout={timeout}
      unmountOnExit
    >
      <div ref={nodeRef} />
    </CSSTransition>
  );
};

export const Overlay = memo(Component);

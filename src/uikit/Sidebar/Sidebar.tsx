import { forwardRef, memo } from "react";
import type { MouseEvent, ForwardedRef, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import { TRANSITION } from "uikit/constants/transition";
import { Overlay } from "uikit";
import "./Sidebar.scss";

type TProps = {
  children?: ReactNode;
  className?: string;
  isActive?: boolean;
  onClose?: (event: MouseEvent) => void;
  ref: ForwardedRef<HTMLDivElement>;
  transition?: number;
};

const SidebarComponent = forwardRef(
  (
    { children, className, isActive = false, onClose, transition = TRANSITION }: TProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <>
        <Overlay timeout={transition} onClick={onClose} isActive={isActive} />
        <CSSTransition
          className={clsx("Sidebar", className)}
          in={isActive}
          nodeRef={ref}
          timeout={transition}
          unmountOnExit
        >
          <div ref={ref}>{children}</div>
        </CSSTransition>
      </>
    );
  },
);

SidebarComponent.displayName = "Sidebar";

export const Sidebar = memo(SidebarComponent);

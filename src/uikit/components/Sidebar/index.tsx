import clsx from "clsx";
import { forwardRef, memo, type ForwardedRef } from "react";
import { CSSTransition } from "react-transition-group";

import { TRANSITION } from "uikit/constants/transition";
import { Overlay } from "uikit";

import type { TSidebarProps } from "./types";
import "./Sidebar.scss";

const SidebarComponent = forwardRef(
  (
    {
      children,
      className,
      dataTestId = "uikit__sidebar",
      isActive = false,
      onClose,
      transition = TRANSITION,
    }: TSidebarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <>
        <Overlay timeout={transition} onClick={onClose} isActive={isActive} />
        <CSSTransition
          className={clsx("Sidebar", className)}
          data-testid={dataTestId}
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

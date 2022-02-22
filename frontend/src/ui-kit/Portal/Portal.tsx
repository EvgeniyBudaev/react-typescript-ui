import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

const root = document.getElementById("react-modals");

export interface IPortalProps {
  className?: string;
  element?: keyof JSX.IntrinsicElements;
}

export const Portal: React.FC<IPortalProps> = ({
  className,
  children,
  element: Element = "div",
}) => {
  return root
    ? ReactDOM.createPortal(
        <Element className={cn("Portal", className)}>{children}</Element>,
        root
      )
    : null;
};

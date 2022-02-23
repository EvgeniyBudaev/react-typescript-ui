import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

export interface IPortalProps {
  className?: string;
  element?: keyof JSX.IntrinsicElements;
  elementFindById: string;
}

export const Portal: React.FC<IPortalProps> = ({
  className,
  children,
  element: Element = "div",
  elementFindById,
}) => {
  const root = document.getElementById(elementFindById);

  return root
    ? ReactDOM.createPortal(
        <Element className={cn("Portal", className)}>{children}</Element>,
        root
      )
    : null;
};

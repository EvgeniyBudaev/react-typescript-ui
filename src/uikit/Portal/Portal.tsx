import type { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";

type TProps = {
  children?: ReactNode;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
  elementFindById: string;
};

export const Portal: FC<TProps> = ({
  children,
  className,
  element: Element = "div",
  elementFindById,
}) => {
  const root = document.getElementById(elementFindById);

  return root
    ? ReactDOM.createPortal(
        <Element className={clsx("Portal", className)}>{children}</Element>,
        root,
      )
    : null;
};

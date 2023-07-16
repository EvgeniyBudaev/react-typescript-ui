import clsx from "clsx";
import type { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

type TProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  element?: keyof JSX.IntrinsicElements;
  elementFindById: string;
};

export const Portal: FC<TProps> = ({
  children,
  className,
  dataTestId = "uikit__portal",
  element: Element = "div",
  elementFindById,
}) => {
  const root = document.getElementById(elementFindById);

  return root
    ? ReactDOM.createPortal(
        <Element className={clsx("Portal", className)} data-testid={dataTestId}>
          {children}
        </Element>,
        root,
      )
    : null;
};

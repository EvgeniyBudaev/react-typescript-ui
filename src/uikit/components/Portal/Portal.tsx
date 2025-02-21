import clsx from "clsx";
import { memo, type FC } from "react";
import ReactDOM from "react-dom";

import type { TPortalProps } from "./types";

const PortalComponent: FC<TPortalProps> = ({
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

PortalComponent.displayName = "Portal";

export const Portal = memo(PortalComponent);

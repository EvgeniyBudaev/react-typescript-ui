import clsx from "clsx";
import type { ReactElement } from "react";

import { ETablePlacement, Tooltip } from "uikit";
import type { TPlacement } from "uikit";

type TProps = {
  info?: string | ReactElement;
  placement?: TPlacement;
};

export const TableHeader: FCC<TProps> = ({ children, info, placement = ETablePlacement.Top }) => {
  return (
    <div className={clsx("TableHeader", { "TableHeader-CursorHelp": info })}>
      {info ? (
        <Tooltip message={info} placement={placement}>
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </div>
  );
};

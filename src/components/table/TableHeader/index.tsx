import type { FC, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { ETablePlacement, Tooltip } from "uikit";
import type { TPlacement } from "uikit";

type TProps = {
  children?: ReactNode;
  info?: string | ReactElement;
  placement?: TPlacement;
};

export const TableHeader: FC<TProps> = ({ children, info, placement = ETablePlacement.Top }) => {
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

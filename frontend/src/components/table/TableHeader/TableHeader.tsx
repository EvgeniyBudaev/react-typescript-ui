import type { FC, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { Tooltip } from "../../../uikit";
import { ETablePlacement } from "../../../uikit/Table/enums";
import { TPlacement } from "../../../uikit/Tooltip/Tooltip/types";

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

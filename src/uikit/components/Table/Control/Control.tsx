import { memo } from "react";
import type { ReactElement } from "react";
import { Options } from "../Options";
import type { TTableOptionsProps } from "../Options";

type TProps<T extends object> = {
  options?: Omit<TTableOptionsProps<T>, "columns">;
  columns: TTableOptionsProps<T>["columns"];
};

const ControlComponent = <T extends object>({ options, columns }: TProps<T>): ReactElement => {
  return <div>{options && <Options {...options} columns={columns} />}</div>;
};

ControlComponent.displayName = "Control";

export const Control = memo(ControlComponent) as typeof ControlComponent;

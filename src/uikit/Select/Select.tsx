import { memo } from "react";
import type { FC, FocusEventHandler } from "react";
import { default as ReactSelect } from "react-select";
import type {
  ActionMeta,
  GroupBase,
  StylesConfig,
  OnChangeValue,
  MultiValue,
  SingleValue,
  GetOptionLabel,
  MenuPosition,
  MenuPlacement,
} from "react-select";
import type { SelectComponents } from "react-select/dist/declarations/src/components";
import clsx from "clsx";

import { ETheme } from "../enums";
import { useMounted } from "../hooks";
import { generateUUID } from "../utils";
import { selectStyles } from "./selectStyles";
import type { isSelectMultiType, TSelectOption } from "./types";
import "./Select.scss";

export type TSelectProps = {
  className?: string;
  components?: Partial<SelectComponents<any, any, GroupBase<any>>>;
  defaultValue?: TSelectOption | TSelectOption[];
  getOptionLabel?: GetOptionLabel<TSelectOption | TSelectOption[]>;
  id?: string;
  instanceId?: string;
  isMulti?: isSelectMultiType;
  menuPlacement?: MenuPlacement;
  menuPosition?: MenuPosition;
  name?: string;
  onBlur?: FocusEventHandler;
  onChange?: (
    value: OnChangeValue<TSelectOption, isSelectMultiType>,
    action: ActionMeta<TSelectOption>,
  ) => void;
  onFocus?: FocusEventHandler;
  options: TSelectOption[];
  styles?: StylesConfig<TSelectOption, isSelectMultiType, GroupBase<TSelectOption>> | undefined;
  theme?: ETheme;
  value?: SingleValue<TSelectOption> | MultiValue<TSelectOption>;
};

const SelectComponent: FC<TSelectProps> = ({
  className,
  components,
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isMulti = false,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  styles,
  theme = ETheme.Light,
  value,
}) => {
  const uuid = generateUUID();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <ReactSelect
      className={clsx("Select", className)}
      components={components}
      defaultValue={defaultValue}
      getOptionLabel={getOptionLabel}
      id={id ? id : uuid}
      instanceId={instanceId ? instanceId : uuid}
      isMulti={isMulti}
      menuPlacement={menuPlacement}
      menuPosition={menuPosition}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      options={options}
      styles={!styles && theme ? selectStyles(theme) : styles}
      value={value}
    />
  ) : null;
};

export const Select = memo(SelectComponent);

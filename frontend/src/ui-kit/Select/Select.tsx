import React, { FocusEventHandler } from "react";
import {
  ActionMeta,
  default as ReactSelect,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  OnChangeValue,
  StylesConfig,
} from "react-select";
import classNames from "classnames";
import "./Select.scss";

export interface ISelectOption {
  value: string;
  label: string;
}

type isMultiType = true | false;
export type DropdownIndicatorType = React.ComponentType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DropdownIndicatorProps<any, any, GroupBase<any>>
>;
export type MultiValueRemoveType = React.ComponentType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MultiValueRemoveProps<any, isMultiType, GroupBase<any>>
>;

export interface ISelectProps {
  className?: string;
  DropdownIndicator?: DropdownIndicatorType;
  isMulti?: isMultiType;
  MultiValueRemove?: MultiValueRemoveType;
  options: ISelectOption[];
  styles?: StylesConfig<ISelectOption, isMultiType>;
  value: ISelectOption;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (
    value: OnChangeValue<ISelectOption, isMultiType>,
    action: ActionMeta<ISelectOption>
  ) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const Select: React.FC<ISelectProps> = ({
  className,
  DropdownIndicator,
  isMulti = false,
  MultiValueRemove,
  options,
  styles,
  value,
  onBlur,
  onChange,
  onFocus,
}) => {
  return (
    <ReactSelect
      className={classNames("Select", className)}
      components={{
        DropdownIndicator: DropdownIndicator,
        MultiValueRemove: MultiValueRemove,
      }}
      isMulti={isMulti}
      options={options}
      styles={styles}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

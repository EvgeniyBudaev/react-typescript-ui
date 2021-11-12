import React, { FocusEventHandler } from "react";
import {
  ActionMeta,
  default as ReactSelect,
  OnChangeValue,
  StylesConfig,
} from "react-select";
import classNames from "classnames";
import "./Select.scss";

export interface ISelectOption {
  value: string;
  label: string;
}

type isMulti = false;

export interface ISelectProps {
  className?: string;
  options: ISelectOption[];
  styles?: StylesConfig<ISelectOption, isMulti>;
  value: ISelectOption;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (
    value: OnChangeValue<ISelectOption, isMulti>,
    action: ActionMeta<ISelectOption>
  ) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const Select: React.FC<ISelectProps> = ({
  className,
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
      options={options}
      styles={styles}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
};

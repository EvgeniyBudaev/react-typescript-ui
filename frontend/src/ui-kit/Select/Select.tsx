import React from "react";
import {
  ActionMeta,
  default as ReactSelect,
  FocusEventHandler,
  GroupTypeBase,
  Styles,
} from "react-select";
import classNames from "classnames";
import "./Select.scss";

export interface ISortingOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  className?: string;
  options: ISortingOption[];
  styles?: Partial<
    Styles<ISortingOption, false, GroupTypeBase<ISortingOption>>
  >;
  value: ISortingOption;
  onBlur?: FocusEventHandler;
  onChange?: ((
    value: ISortingOption,
    actionMeta: ActionMeta<ISortingOption>
  ) => void) &
    ((value: ISortingOption, action: ActionMeta<ISortingOption>) => void);
  onFocus?: FocusEventHandler;
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

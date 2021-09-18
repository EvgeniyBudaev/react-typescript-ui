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

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  className?: string;
  options: ISelectOption[];
  styles?: Partial<Styles<ISelectOption, false, GroupTypeBase<ISelectOption>>>;
  value: ISelectOption;
  onBlur?: FocusEventHandler;
  onChange?:
    | (((
        value: ISelectOption | null,
        actionMeta: ActionMeta<ISelectOption>
      ) => void) &
        ((
          value: ISelectOption | null,
          action: ActionMeta<ISelectOption>
        ) => void))
    | undefined;
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

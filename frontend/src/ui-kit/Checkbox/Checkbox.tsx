import React from "react";
import classNames from "classnames";
import { Icon } from "ui-kit/index";
import "./Checkbox.scss";

interface ICheckboxProps {
  className?: string;
  id: string;
  value?: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  id,
  value,
  onChange,
}) => {
  return (
    <label
      className={classNames("CheckBox", className, {
        CheckBox__active: isChecked,
      })}
      htmlFor={id}
    >
      <span className="CheckBox-Inner">
        <Icon className="CheckBox-Icon" type="Checkbox" />
        <input
          checked={isChecked}
          id={id}
          name={value}
          type="checkbox"
          value={value}
          onChange={onChange}
        />
      </span>
      {value && <span className="CheckBox-Label">{value}</span>}
    </label>
  );
};

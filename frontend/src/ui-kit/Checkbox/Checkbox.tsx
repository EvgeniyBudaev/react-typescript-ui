import React, { memo } from "react";
import classNames from "classnames";
import { Icon } from "ui-kit/index";
import "./Checkbox.scss";

interface ICheckboxProps {
  className?: string;
  id: string;
  label?: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxComponent: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  id,
  label,
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
          name={label}
          type="checkbox"
          value={label}
          onChange={onChange}
        />
      </span>
      {label && <span className="CheckBox-Label">{label}</span>}
    </label>
  );
};

export const Checkbox = memo(CheckboxComponent);

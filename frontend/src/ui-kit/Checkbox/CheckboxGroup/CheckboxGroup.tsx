import React from "react";
import classNames from "classnames";
import { Icon } from "ui-kit/index";
import "./CheckboxGroup.scss";

interface ICheckboxGroupProps {
  className?: string;
  checkedBoxByGroup: any;
  id: string;
  nameGroup: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    nameGroup: string
  ) => void;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  className,
  checkedBoxByGroup,
  id,
  nameGroup,
  value,
  onChange,
}) => {
  const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(value);

  const handleChange = event => {
    onChange(event, nameGroup);
  };

  return (
    <label
      className={classNames("CheckBoxGroup", className, {
        CheckBoxGroup__active: isChecked,
      })}
      htmlFor={id}
    >
      <span className="CheckBoxGroup-Inner">
        <Icon className="CheckBoxGroup-Icon" type="Checkbox" />
        <input
          checked={isChecked}
          id={id}
          name={value}
          type="checkbox"
          value={value}
          onChange={handleChange}
        />
      </span>
      {value && <span className="CheckBoxGroup-Label">{value}</span>}
    </label>
  );
};

import React from "react";
import classNames from "classnames";
import { Icon } from "ui-kit/index";

interface ICheckboxGroupProps {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkedBoxByGroup: any;
  id: string;
  nameGroup: string;
  label: string;
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
  label,
  onChange,
}) => {
  const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(label);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, nameGroup);
  };

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
          onChange={handleChange}
        />
      </span>
      {label && <span className="CheckBox-Label">{label}</span>}
    </label>
  );
};
